import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useAuthState } from "react-firebase-hooks/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
  debugErrorMap,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  arrayUnion,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDtmAvDv42gtGPAoGfYyAiqOGWgWB3gqpc",
  authDomain: "study-clone-80583.firebaseapp.com",
  projectId: "study-clone-80583",
  storageBucket: "study-clone-80583.appspot.com",
  messagingSenderId: "986736948948",
  appId: "1:986736948948:web:7f5dd6d7e63333d2afad41",
  measurementId: "G-3SZLWTXE0Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    if (user) {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        if (!data) window.location.reload();

        setUserData({ ...data, name: data.name.split(" ")[0] });
      } catch (err) {
        console.log(err.code);
        console.log(err.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const createUserWithEmail = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        const userInfo = await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: name,
          authProvider: "google",
          email: email,
          createdAt: user.metadata.createdAt,
        });
        if (userInfo) {
          toast.success("Usu??rio criado com sucesso");
        }
      }
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          toast.error("Sua senha precisa conter pelo menos 6 caracteres");
          break;
        case "auth/email-already-in-use":
          toast.error("Email j?? cadastrado");
          break;
        default:
          null;
      }
    }
  };

  const signUpWithEmail = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        console.log(docs.docs);
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.name,
          authProvider: "google",
          email: email,
        });
      }
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          toast.error("Usu??rio n??o encontrado ou n??o registrado");
          break;
        case "auth/invalid-email":
          toast.error("Formato de email inv??lido");
          break;
        case "auth/wrong-password":
          toast.error("Senha inv??lida");
          break;
        default:
          null;
      }
    }
  };

  const deleteUserFromWebsite = async (user) => {
    try {
      const res = await deleteUser(user);
      toast.sucess("usu??rio deletado com sucesso");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const res = await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getRootElement = document.querySelector("#root");
    loading
      ? (getRootElement.style.filter = "brightness(0.7)")
      : (getRootElement.style.filter = "");
  }, [loading, user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        loading,
        fetchUserData,
        signInWithGoogle,
        createUserWithEmail,
        signUpWithEmail,
        deleteUserFromWebsite,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

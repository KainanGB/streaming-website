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
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  arrayUnion,
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
  const [name, setName] = useState();
  const [createdAt, setCreatedAt] = useState();

  const fetchUserName = async () => {
    if (user) {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);

        const data = doc.docs[0].data();

        const date =
          doc.docs[0]._firestore._authCredentials.auth.auth.currentUser.metadata
            .creationTime;

        setCreatedAt(date);
        setName(data.name.split(" ")[0]);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    } else console.log("DEU B.O");
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

      console.log(user);

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);

      console.log(docs);

      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: name,
          authProvider: "google",
          email: email,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signUpWithEmail = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(auth);

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.name,
          authProvider: "google",
          email: email,
        });
      }
    } catch (err) {
      if (err.code === "auth/user-not-found")
        toast.error("Usuário não encontrado ou não registrado");
    }
  };

  const deleteUserFromWebsite = (user) => {
    deleteUser(user)
      .then(() => {
        console.log(user + "foi deletado");
      })
      .catch((err) => console.error(err));
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        console.log(user + "saiu");
      })
      .catch((error) => console.error(error));
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
        loading,
        name,
        fetchUserName,
        signInWithGoogle,
        createdAt,
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

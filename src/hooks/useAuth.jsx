import { createContext, useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithGoogle,
  logout,
  db,
  auth,
  createUserWithEmail,
  signUpWithEmail,
  deleteUserFromWebsite,
} from "../server/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [userImage, setUserImage] = useState();

  const fetchUserName = async () => {
    if (user) {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);

        const data = doc.docs[0].data();
        const dataUserImage =
          doc.docs[0]._firestore._authCredentials.auth.auth.currentUser
            .providerData[0].photoURL;

        const date =
          doc.docs[0]._firestore._authCredentials.auth.auth.currentUser.metadata
            .creationTime;

        setUserImage(dataUserImage);
        setCreatedAt(date);
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    } else console.log("DEU B.O");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        name,
        fetchUserName,
        signInWithGoogle,
        createdAt,
        userImage,
        createUserWithEmail,
        signUpWithEmail,
        deleteUserFromWebsite,
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

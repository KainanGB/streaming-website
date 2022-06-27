//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import {
//  getAuth,
//  GoogleAuthProvider,
//  signInWithPopup,
//  signOut,
//  signInWithEmailAndPassword,
//  createUserWithEmailAndPassword,
//  deleteUser,
//} from "firebase/auth";

//import {
//  getFirestore,
//  query,
//  getDocs,
//  collection,
//  where,
//  addDoc,
//} from "firebase/firestore";

//const firebaseConfig = {
//  apiKey: "AIzaSyDtmAvDv42gtGPAoGfYyAiqOGWgWB3gqpc",
//  authDomain: "study-clone-80583.firebaseapp.com",
//  projectId: "study-clone-80583",
//  storageBucket: "study-clone-80583.appspot.com",
//  messagingSenderId: "986736948948",
//  appId: "1:986736948948:web:7f5dd6d7e63333d2afad41",
//  measurementId: "G-3SZLWTXE0Q",
//};

//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
//const db = getFirestore(app);
//const analytics = getAnalytics(app);

//const googleProvider = new GoogleAuthProvider();

//const signInWithGoogle = async () => {
//  try {
//    const res = await signInWithPopup(auth, googleProvider);
//    const user = res.user;

//    const q = query(collection(db, "users"), where("uid", "==", user.uid));
//    const docs = await getDocs(q);

//    if (docs.docs.length === 0) {
//      await addDoc(collection(db, "users"), {
//        uid: user.uid,
//        name: user.displayName,
//        authProvider: "google",
//        email: user.email,
//      });
//    }
//  } catch (err) {
//    console.error(err);
//    alert(err.message);
//  }
//};

//const createUserWithEmail = async (name, email, password) => {
//  try {
//    const res = await createUserWithEmailAndPassword(auth, email, password);
//    const user = res.user;

//    const q = query(collection(db, "users"), where("uid", "==", user.uid));
//    const docs = await getDocs(q);

//    if (docs.docs.length === 0) {
//      await addDoc(collection(db, "users"), {
//        uid: user.uid,
//        name: name,
//        authProvider: "google",
//        email: email,
//      });
//    }
//  } catch (err) {
//    console.error(err);
//  }
//};

//const deleteUserFromWebsite = (user) => {
//  deleteUser(user).then(() => {
//    console.log(user + "foi deletado");
//  });
//};

//const logout = () => {
//  return signOut(auth)
//    .then(() => {
//      console.log("saiu");
//    })
//    .catch((error) => console.error(error));
//};

//export {
//  signInWithGoogle,
//  logout,
//  db,
//  auth,
//  createUserWithEmail,
//  signUpWithEmail,
//  deleteUserFromWebsite,
//};

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  actionCodeSettingsForgotPassword,
  actionCodeSettingsVerification,
  firebaseConfig,
} from "./firebase-config";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  
} from "firebase/firestore";
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth || !userAuth.emailVerified) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  console.log("userRef ==> ", userRef);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem("username"),
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const auth = getAuth();

console.log("auth ==> ", auth);

auth.useDeviceLanguage();

export const createUser = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password).then((userCredencial) =>
    sendEmailVerification(
      userCredencial.user,
      actionCodeSettingsVerification
    ).then(() => {
      alert(`Mensaje de verificacion enviado al mail ${email}`);
      localStorage.setItem("username", displayName);
    })
  );

export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
    () => alert(`Mensaje de verificacion enviado al mail ${email}`)
  );

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "firebase/firestore";
// import "firebase/compat/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDE0FBPYiTJQ287Jxni3NXpLba0kyByLxg",
  authDomain: "music-466e0.firebaseapp.com",
  projectId: "music-466e0",
  storageBucket: "music-466e0.appspot.com",
  messagingSenderId: "888541282920",
  appId: "1:888541282920:web:b223f0e09fc9605ea571dd",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const byteFiles = uploadBytes();

const usersCollection = collection(db, "users");

// const test = addDoc(usersCollection)

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line object-curly-newline
export { auth, db, usersCollection, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// eslint-disable-next-line import/prefer-default-export
export { auth };

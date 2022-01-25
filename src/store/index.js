import { createStore } from "vuex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";

import { auth, usersCollection } from "../includes/firebase";

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    authModalShow: (state) => state.authModalShow,
  },
  // db.collection("citites").doc("la").set({})
  // userCollection.doc(userCred.user.uid).set({})

  actions: {
    async register({ commit }, payload) {
      // Auth
      const userCred = await createUserWithEmailAndPassword(auth, payload.email, payload.password);

      // Database
      await setDoc(doc(usersCollection, userCred.user.uid), {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });
      // await userCred.user.updateProfile({
      //   displayName: payload.name,
      // });
      await updateProfile(userCred.user, {
        displayName: payload.name,
      });

      commit("toggleAuth");
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit("toggleAuth");
      }
    },
  },
});

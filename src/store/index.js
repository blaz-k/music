import { createStore } from "vuex";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";

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
  actions: {
    async register({ commit }, payload) {
      // Auth
      await createUserWithEmailAndPassword(auth, payload.email, payload.password);

      // Database
      await addDoc(usersCollection, {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });
      commit("toggleAuth");
    },
  },
});

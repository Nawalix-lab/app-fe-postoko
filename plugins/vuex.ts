import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import Cookies from "js-cookie";
import Crypto from "crypto-js";

//Import store
import activity from "~/store/activity";
import users from "~/store/users";
import activityuser from "~/store/activityuser";
import menu from "~/store/menu";

export default defineNuxtPlugin((nuxtApp) => {
  const vuexCookie = new VuexPersistence<State, Payload>({
    restoreState: (key, storage) => {
      const cookie = Cookies.get(key);

      if (cookie) {
        const bytes = Crypto.AES.decrypt(cookie, "secret key 123");
        const originalText = bytes.toString(Crypto.enc.Utf8);

        return JSON.parse(originalText);
      }
    },
    saveState: (key, state, storage) => {
      const ciphertext = Crypto.AES.encrypt(
        JSON.stringify(state),
        "secret key 123"
      ).toString();

      return Cookies.set(key, ciphertext, { expires: 3 });
    },
    modules: ["menu"], //only save user module
    // filter: (mutation) => mutation.type == "logIn" || mutation.type == "logOut",
  });

  const store = createStore({
    modules: {
      activity,
      users,
      activityuser,
      menu,
    },
    mutations: {
      RESTORE_MUTATION: vuexCookie.RESTORE_MUTATION, // this mutation **MUST** be named "RESTORE_MUTATION"
    },
    plugins: [vuexCookie.plugin],
  });

  nuxtApp.vueApp.use(store);

  return {
    provide: {
      store,
    },
  };
});

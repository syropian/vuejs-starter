import {
  SET_USER
} from "../mutation-types";

const state  = {
  user: {
    name: "Tessa",
    surname: "Martin",
    gender: "female",
    region: "Canada"
  },
}

const mutations = {
  [SET_USER] (state, user) {
    state.user = user;
  }
}

export default {
  state,
  mutations
}

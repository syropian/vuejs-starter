import {
  SET_USER
} from "../mutation-types";

const state  = {
  user: {
    name: "Jane Doe"
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

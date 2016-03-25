import Vue from "vue";
import VueResource from "vue-resource";
import * as types from "./mutation-types.js";

Vue.use(VueResource);

//User
export const fetchUser = ({ dispatch, state }) => {
  Vue.http.get("/api/auth/user").then( (response) => {
    dispatch(types.SET_USER, response.data.user);
  });
};

import Vue from "vue"
import VueResource from "vue-resource"
import * as types from "./mutation-types.js"

Vue.use(VueResource)

// User
export const fetchUser = ({ dispatch, state }) => {
  Vue.http.get("http://api.uinames.com/?country=canada").then((response) => {
    dispatch(types.SET_USER, response.data)
  })
}

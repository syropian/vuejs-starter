<template>
  <h3>Hi {{ user.name }}</h3>
</template>
<script>
import { fetchUser } from "../store/actions";
import { user } from "../store/getters";
export default {
  name: "Main",
  vuex: {
    getters: {
      user: user
    },
    actions: {
      fetchUser
    }
  }
}
</script>

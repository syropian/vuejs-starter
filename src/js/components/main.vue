<template>
  <div class="name-container">
    <h3>Hi {{ fullName }}</h3>
  </div>
  <button @click="fetchUser">Generate New Name</button>
</template>
<script>
import { fetchUser } from "../store/actions"
import { user } from "../store/getters"
export default {
  name: "Main",
  vuex: {
    getters: {
      user: user
    },
    actions: {
      fetchUser
    }
  },
  computed: {
    fullName: () => {
      return `${this.user.name} ${this.user.surname}`
    }
  }
}
</script>

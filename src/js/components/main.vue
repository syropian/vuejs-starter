<template>
  <div class="name-container">
    <h3>Hi {{ fullName }}</h3>
  </div>
  <button @click="fetchUser">Generate New Name</button>
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
  },
  computed: {
    fullName: function() {
      return `${this.user.name} ${this.user.surname}`;
    }
  }
}
</script>
<style lang="sass">
@import "bourbon";
.name-container {
  $sea-green: #70CAB4;
  @include size(200px 200px);
  background: $sea-green;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  outline: 1px solid $sea-green;
  margin: 20px;
  padding: 20px;
}
button { margin-left: 20px; }
</style>

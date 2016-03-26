<template>
  <div class="foo">
    <h3>Hi {{ user.name }}</h3>
  </div>
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
<style lang="sass">
@import "bourbon";
.foo {
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
}
</style>

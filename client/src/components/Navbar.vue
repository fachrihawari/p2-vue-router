<script>

import { RouterLink } from 'vue-router';

export default {
    methods: {
        // goToAddPage() {
        //   this.$emit('changePage', 'form')
        // },
        // goToHome() {
        //   this.$emit('changePage', 'home')
        // },
        doLogout() {
            // this.$emit('doLogout')
            localStorage.clear();
            this.$router.push("/login");
        }
    },
    components: { RouterLink }
}
</script>

<template>
  <nav class="navbar navbar-light bg-warning px-5 sticky-top">
    <RouterLink to="/">
      <span class="navbar-brand mb-0 h1">Database Group</span>
    </RouterLink>
    <div class="d-flex justify-content-around">
      <RouterLink to="/add" class="btn btn-outline-primary me-4">Add New</RouterLink>
      <button @click="doLogout" class="btn btn-outline-danger">Logout</button>
    </div>
  </nav>
</template>

<style></style>

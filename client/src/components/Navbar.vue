<script>

export default {
  methods: {
    goToAddPage() {
      this.$emit('changePage', 'form')
    },
    goToHome() {
      this.$emit('changePage', 'home')
    },
    doLogout() {
      this.$emit('doLogout')
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-light bg-warning px-5 sticky-top">
    <a @click.prevent="goToHome" href="#">
      <span class="navbar-brand mb-0 h1">Product CMS</span>
    </a>
    <div class="d-flex justify-content-around">
      <button @click="goToAddPage" class="btn btn-outline-primary me-4">Add New</button>
      <button @click="doLogout" class="btn btn-outline-danger">Logout</button>
    </div>
  </nav>
</template>

<style></style>

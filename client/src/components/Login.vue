<script>

export default {
  data() {
    return {
      inputLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin() {
      this.$emit('doLogin', this.inputLogin)
    }
  }
}

</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-3 w-50 mt-5">
      <h4 class="text-center mb-3">Login</h4>

      <form @submit.prevent="doLogin">
        <label for="Email" class="form-label">Email</label>
        <input v-model="inputLogin.email" id="Email" type="email" placeholder="input email" class="form-control mb-3">

        <label for="Password" class="form-label">Password</label>
        <input v-model="inputLogin.password" id="Password" type="password" placeholder="input password"
          class="form-control mb-3">

        <button type="submit" class="btn btn-warning">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

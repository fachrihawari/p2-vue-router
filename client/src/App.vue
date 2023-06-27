<script>
import axios from 'axios'
import Login from './components/Login.vue';
import Home from './components/Home.vue'
import Form from './components/Form.vue';
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      currentPage: 'login',
      girlgroups: [],
      singleGG: null
    }
  },
  components: {
    Login,
    Home,
    Form,
    Navbar
  },
  methods: {
    changePage(page) {
      if (!localStorage.access_token) {
        this.currentPage = 'login'
      } else {
        this.currentPage = page
      }
    },
    doLogout() {
      localStorage.clear()
      this.currentPage = 'login'
    },
    async doLogin(dataInput) {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/users',
          method: 'post',
          data: dataInput
        })

        localStorage.access_token = data

        this.fetchData()

        this.currentPage = 'home'
      } catch (error) {
        console.log(error)
      }
      // setelah login berhasil aku akan change page
    },

    async fetchData() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/girlgroups',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.girlgroups = data
      } catch (error) {
        console.log(error)
      }
    },
    async postData(dataInput) {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/girlgroups',
          method: 'post',
          data: dataInput,
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.fetchData()

        this.currentPage = 'home'
      } catch (error) {
        console.log(error);
      }
    },
    async doEdit(id) {
      console.log(id, 'ini di app');
      // udah dapet data per id nya
      // masukin ke singleGG
      // kita pindah ke halaman form

      this.currentPage = 'form'
    }
  },
  created() {
    if (localStorage.access_token) {
      this.currentPage = 'home'
      this.fetchData()
    } else {
      this.currentPage = 'login'
    }
  }
}

</script>

<template>
  <Navbar @changePage="changePage" @doLogout="doLogout" />
  <Login v-if="currentPage === 'login'" @doLogin="doLogin" />
  <Home v-if="currentPage === 'home'" :girlgroups="girlgroups" @doEdit="doEdit" />
  <Form v-if="currentPage === 'form'" @doAdd="postData" :singleGG="singleGG" />
</template>

<style scoped></style>

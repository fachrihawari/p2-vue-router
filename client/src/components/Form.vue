<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataInput: {
        name: null,
        company: null,
        imgUrl: null
      },
    }
  },
  props: ['singleGG'],
  methods: {
    async doAdd() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/girlgroups',
          method: 'post',
          data: this.dataInput,
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(data)
        // this.fetchData()

        // this.currentPage = 'home'
        this.$router.push('/')
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    if (this.singleGG) { // ini mengecek kondisi apakah formnya lg dipakai u/ edit / add
      this.dataInput.name = this.singleGG.name
      this.dataInput.company = this.singleGG.company
      this.dataInput.imgUrl = this.singleGG.imgUrl
    } else {
      this.dataInput.name = ''
      this.dataInput.company = ''
      this.dataInput.imgUrl = ''
    }
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-3 w-50 mt-5">
      <h4 class="text-center mb-3">Add New Group</h4>

      <form @submit.prevent="doAdd">

        <label for="Name" class="form-label">Name</label>
        <input v-model="dataInput.name" id="Name" type="text" placeholder="input name" class="form-control mb-3">

        <label for="Company" class="form-label">Company</label>
        <input v-model="dataInput.company" id="Company" type="text" placeholder="input company" class="form-control mb-3">

        <label for="imgUrl" class="form-label">ImageUrl</label>
        <input v-model="dataInput.imgUrl" id="imgUrl" type="text" placeholder="input image url" class="form-control mb-3">

        <button type="submit" class="btn btn-warning">Submit</button>
      </form>
    </div>
  </div>
</template>

<style></style>

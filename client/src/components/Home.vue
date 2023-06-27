<script>
import axios from 'axios';
import Card from './Card.vue';

export default {
  // props: ['girlgroups'],
  data() {
    return {
      girlgroups: []
    }
  },
  components: {
    Card
  },
  methods: {
    doEdit(id) {
      this.$emit('doEdit', id)
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
  },
  created() {
    this.fetchData()
  }
}
</script>

<template>
  <!-- container items -->
  <div class="col-9 container my-5">
    <div class="row g-3">

      <!-- looping items -->
      <Card v-for="girlgroup in girlgroups" :key="girlgroup.id" :girlgroup="girlgroup" />

    </div>
  </div>
  <!-- <div class="card w-75 mx-auto">

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Company</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <TableRow @doEdit="doEdit" v-for="girlgroup in girlgroups" :key="girlgroup.id" :girlgroup="girlgroup" />
      </tbody>
    </table>
  </div> -->
</template>

<style></style>

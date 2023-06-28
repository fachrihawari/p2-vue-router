<script>
import Card from './Card.vue';

export default {
  props: ['products'],
  components: {
    Card
  },
  methods: {
    doEdit(id) {
      this.$emit('doEdit', id)
    }
  }
}
</script>

<template>
  <!-- container items -->
  <div class="col-9 container my-5">
    <div class="row g-3">

      <!-- looping items -->
      <Card v-for="product in products" :key="product.id" :product="product" />

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
        <TableRow @doEdit="doEdit" v-for="product in products" :key="product.id" :product="product" />
      </tbody>
    </table>
  </div> -->
</template>

<style></style>

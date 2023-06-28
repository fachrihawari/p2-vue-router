<script>
export default {
  data() {
    return {
      dataInput: {
        name: null,
        description: null,
        mainImg: null
      },
    }
  },
  props: ['singleGG'],
  methods: {
    doAdd() {
      this.$emit('doAdd', this.dataInput)
    }
  },
  created() {
    if (this.singleGG) { // ini mengecek kondisi apakah formnya lg dipakai u/ edit / add
      this.dataInput.name = this.singleGG.name
      this.dataInput.description = this.singleGG.description
      this.dataInput.mainImg = this.singleGG.mainImg
    } else {
      this.dataInput.name = ''
      this.dataInput.description = ''
      this.dataInput.mainImg = ''
    }
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-3 w-50 mt-5">
      <h4 class="text-center mb-3">Add New Product</h4>

      <form @submit.prevent="doAdd">

        <label for="Name" class="form-label">Name</label>
        <input v-model="dataInput.name" id="Name" type="text" placeholder="input name" class="form-control mb-3">

        <label for="description" class="form-label">Description</label>
        <textarea v-model="dataInput.description" id="description" placeholder="input description" class="form-control mb-3"></textarea>

        <label for="mainImg" class="form-label">ImageUrl</label>
        <input v-model="dataInput.mainImg" id="mainImg" type="text" placeholder="input image url" class="form-control mb-3">

        <button type="submit" class="btn btn-warning">Submit</button>
      </form>
    </div>
  </div>
</template>

<style></style>

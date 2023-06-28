<script>
export default {
  props: ['product'] // {id, name, mainImg, description}
}
</script>

<template>
  <div class="col-3">
    <div class="card">
      <img :src="product.mainImg" style="height: 12rem; object-fit: cover;" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

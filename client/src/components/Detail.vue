<script>
import axios from 'axios'
export default {
  data() {
    return {
      detail: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/girlgroups/' + this.$route.params.id,
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.detail = data
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm">
        <div v-if="detail" class="card mb-3 mt-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="detail.imgUrl" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ detail.name }}</h5>
                <p class="card-text">
                  {{ detail.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </div>
</template>

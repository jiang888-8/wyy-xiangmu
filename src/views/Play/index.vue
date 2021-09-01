<template>
  <div>
    <van-icon @click="$router.back()" name="arrow-left" />
    play {{id}}
  </div>
</template>

<script>
export default {
  name: 'Play',
  data () {
    return {
      id: null
    }
  },

  created () {
    this.id = this.$route.params.id
  },

  methods: {

  }
}
</script>

<style scoped>

</style>

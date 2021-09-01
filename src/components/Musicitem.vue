<template>
  <div>
    <van-cell center :key="id" :title="name" :label="authorName + ' • ' + name">
      <van-icon @click="$router.push('/play/' + id)" color="#000" size="25" name="play-circle-o" />
    </van-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  props: {
    name: {
      type: String,
      requried: true
    },
    authorName: {
      type: String,
      requried: true
    },
    id: {
      type: Number,
      requried: true
    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped>

</style>

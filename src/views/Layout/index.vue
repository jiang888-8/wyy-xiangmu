<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      :title="$route.meta.title"
    />
    <!-- 中间路由占位 -->
    <router-view/>

    <!-- 底部 -->
    <van-tabbar route>
      <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/search' icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

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

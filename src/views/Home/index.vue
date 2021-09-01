<template>
  <div class="home">
    <div class="recomentd">推荐歌单</div>
    <van-row gutter="10">
      <van-col span="8">
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="desa">你猜我猜不猜</p>
      </van-col>
      <van-col span="8">
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="desa">你猜我猜不猜</p>
      </van-col>
      <van-col span="8">
        <van-image
          width="100"
          height="100"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="desa">你猜我猜不猜</p>
      </van-col>
    </van-row>

  </div>
</template>

<script>
import request from '@/utils/request.js'
console.log(request)
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
.recomentd {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color: #c71d24;
  color: #fff;
  padding-left: 10px;
}
.desa {
  font-size: 12px;
}
</style>

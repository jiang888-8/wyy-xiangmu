<template>
  <div class="home">
    <div class="recomentd">推荐歌单</div>
    <van-row gutter="10">
      <van-col span="8" v-for="item in songList" :key="item.id">
        <van-image
          width="100"
          height="100"
          :src="item.picUel"
        />
        <p class="desa">{{ item.name }}</p>
      </van-col>
    </van-row>
    <!-- 最新音乐 -->
    <div class="recomentd">最新音乐</div>
      <Musicitem v-for="item in newList" :key="item.id"
      :name='item.name'
      :authorName="item.song.artists[0].name"
      :id='item.id'
    />
  </div>
</template>

<script>
import { getSongList, getNewSongList } from '@/api/recommend.js'
import Musicitem from '@/components/Musicitem'
export default {
  name: 'Home',
  data () {
    return {
      songList: [],
      newList: []
    }
  },

  components: {
    Musicitem
  },

  created () {
    this.getPersonalized()
    this.getNewMusic()
  },

  methods: {
    async getPersonalized () {
      const res = await getSongList({
        limit: 6
      })
      this.songList = res.data.result
      console.log(this.songList)
    },

    async getNewMusic () {
      const res = await getNewSongList({
        limit: 20
      })
      this.newList = res.data.result
      console.log(this.newList)
    }
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
.van-col {
  padding: 10px 0;
}
</style>

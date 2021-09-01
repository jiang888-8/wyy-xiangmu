<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model.trim="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @input="onInput"
    />
    <!-- 热门搜索 -->
    <div class="hotSearch" v-if="!searchList.length">
      <p class="hotTit">热门搜索</p>
      <div class="hotTags">
        <span @click="onClickTags(item.first)" v-for="item in hotSearch" :key="item.first">{{ item.first }}</span>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="searchRes" v-else>
      <p class="hotTit">搜索结果</p>
      <Musicitem v-for="(item,index) in searchList" :key="index"
      :name='item.name'
      :authorName='item.ar[0].name'
      :id='item.id'
      />
    </div>
  </div>
</template>

<script>
import { getHotSearch, getSearchRes } from '@/api/search.js'
import Musicitem from '@/components/Musicitem'
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      hotSearch: [],
      searchList: []
    }
  },

  components: {
    Musicitem
  },

  created () {
    this.loadHotSearch()
  },

  methods: {
    async loadHotSearch () {
      const res = await getHotSearch()
      this.hotSearch = res.data.result.hots
    },

    async onClickTags (name) {
      this.value = name
      const res = await getSearchRes({
        keywords: this.value,
        limit: 10
      })
      this.searchList = res.data.result.songs
      console.log(this.searchList)
    },

    onInput () {
      if (this.value === '') {
        this.searchList = []
        return
      }
      if (this.id) {
        clearTimeout(this.id)
      }
      this.id = setTimeout(async () => {
        const res = await getSearchRes({
          keywords: this.value,
          limit: 10
        })
        this.searchList = res.data.result.songs
        console.log(this.searchList)
      }, 800)
    }
  }
}
</script>

<style scoped lang='less'>
.hotSearch {
  padding: 0 10px;
  .hotTit {
    font-size: 13px;
    color: #999;
  }

  .hotTags {
    span {
      display: inline-block;
      font-size: 13px;
      border: 1px solid #6f2d9a;
      border-radius: 15px;
      padding: 5px 8px;
      margin: 5px 0;
      margin-right: 8px;
    }

  }
}

.searchRes {
  padding: 0 10px;
  .hotTit {
    font-size: 13px;
    color: #999;
  }
}

</style>

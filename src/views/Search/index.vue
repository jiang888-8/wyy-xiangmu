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
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Musicitem v-for="(item,index) in searchList" :key="index"
        :name='item.name'
        :authorName='item.ar[0].name'
        :id='item.id'
        />
      </van-list>
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
      searchList: [],
      list: [],
      loading: false,
      finished: false,
      offset: 0,
      page: 1
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
      this.page = 1
      if (this.value === '') {
        this.searchList = []
        clearTimeout(this.id)
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
      }, 800)
    },

    async onLoad () {
      this.page++
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // 1.发送请求
      const res = await getSearchRes({
        keywords: this.value,
        limit: 10,
        offset: (this.page - 1) * 10
      })
      console.log(res)

      // 2.保存数据
      if (res.data.result.songs) {
        this.searchList.push(...res.data.result.songs)
        // 3.关闭loading
        this.loading = false
      } else {
        // 4.判断是否加载下一页
        this.finished = true
      }
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

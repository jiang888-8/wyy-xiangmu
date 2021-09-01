// 封装推荐接口
import request from '@/utils/request.js'

/**
 * 获取推荐歌单列表
 * @param {Object} params {limit:获取数量}
 * @returns promise
 */
export function getSongList (params) {
  return request({
    url: '/personalized',
    params
  })
}

/**
 * 获取新音乐歌单列表
 * @param {Object} params {limit:获取数量}
 * @returns promise
 */
export function getNewSongList (params) {
  return request({
    url: '/personalized/newsong',
    params
  })
}

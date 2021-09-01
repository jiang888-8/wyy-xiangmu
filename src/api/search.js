// 封装搜索接口
import request from '@/utils/request.js'

/**
 * 获取热门搜索
 * @returns promise
 */
export const getHotSearch = () => {
  return request({
    url: '/search/hot'
  })
}

/**
 * 获取搜索结果
 * @param {*} params {keywords(必选),limit,offset}
 * @returns promise
 */
export const getSearchRes = (params) => {
  return request({
    url: '/cloudsearch',
    params
  })
}

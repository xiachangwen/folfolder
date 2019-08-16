/*
 * @Author: 夏昌文 
 * @Date: 2019-08-16 14:32:10 
 * @Last Modified by: 夏昌文
 * @Last Modified time: 2019-08-16 20:53:03
 */

 import request from '../uilts/request'
/**
 * 获取热门国家
 */
 export function storelist () {
     return request.get('/buyer/storelist')
 }

 /**
  * data 国家店铺
  */
 export function goodslist (data) {
    return request.post('/store/goods/list',data)
}

/**
 * 商品详情
 */

 export function detail (data) {
     return request.post('/buyer/detail',data)
 }
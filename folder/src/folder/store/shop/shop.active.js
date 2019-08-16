/*
 * @Author: 夏昌文 
 * @Date: 2019-08-16 17:02:08 
 * @Last Modified by: 夏昌文
 * @Last Modified time: 2019-08-16 20:36:41
 */
import {CITY_LIST, CITY_GOOD} from './shop.type'
import {storelist, goodslist, detail} from '../../api/citylt'

/**
 * 热门国家
 */
export const citylist = (next) => {
    storelist().then(res => {
        // console.log(res.data)
        if(res.data.code === 1) {
            let list = res.data.result
            next({type: CITY_LIST,list})
        }
    })
}

/**
 * 国家店铺
 */
export const godlist = (id) => (next) => {
    goodslist({store_id:id}).then(res => {
        // console.log(res.data.result)
        if(res.data.code === 1){
            let arr = res.data.result
            next({type:CITY_GOOD, arr })
        }
    })
}

/**
 * 商品详情
 */
export const delat = (id) => (next) => {
    detail({goods_id:id}).then(res => {
        console.log(res)
    })
}

import request from '../uilts/request'

/**
 * 
 * @param {data}  注册信息
 */
export function register(data){
    return request.post('/buyer/user/register',data)
}

/**
 * 
 * @param { data}  登录信息
 */
export function login(data){
    return request.post('/buyer/user/login',data)
}

/**
 * 验证码
 * @param {*} data 
 */

export function captcha(){
    return request.get('/buyer/user/captcha')
}
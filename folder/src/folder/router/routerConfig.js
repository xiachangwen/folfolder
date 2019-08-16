import React from 'react'
import Loadable from 'react-loadable'

const loading = () => {
    return <div>loading.....</div>
}

//城市
const City = Loadable({
    loader: () => import('../views/city/city'),
    loading:loading
})
const CityList = Loadable({
    loader: () => import('../views/city/page/cityList'),
    loading:loading
})
const CityDetal = Loadable({
    loader: () => import('../views/city/page/cityDetal'),
    loading:loading
})

//订单
const Order = Loadable({
    loader: () => import('../views/order/order'),
    loading:loading
})

//我的
const My = Loadable({
    loader: () => import('../views/my/my'),
    loading:loading
})

//订单
const Login = Loadable({
    loader: () => import('../views/login/login'),
    loading:loading
})
const Register = Loadable({
    loader: () => import('../views/login/register'),
    loading:loading
})

const routes = [
    {
        path:'/',
        redirect:'/city'
    },{
        path:'/city',
        component:City
    },{
        path:'/order',
        component:Order
    },{
        path:'/my',
        component:My
    },{
        path:'/login',
        component:Login
    },{
        path:'/register',
        component:Register
    },{
        path:'/cityList/:id',
        component:CityList
    },{
        path:'/cityDetal/:id',
        component:CityDetal
    }
]

export default routes
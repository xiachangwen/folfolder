import axios from 'axios'

let request = axios.create({
    timeout:1000
})

    //添加一个请求拦截器
  request.interceptors.request.use(function(config){
    //在请求发出之前进行一些操作
    return config;
  },function(error){
    //Do something with request error
    return Promise.reject(error);
  });
  //添加一个响应拦截器
  request.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    return res;
  },function(error){
    //Do something with response error
    return Promise.reject(error);
  })

  export default {
      get(url,data){
        return request.get(url,{params:data})
      },
      post(url,data){
        return request.post(url,data)
      }
  }
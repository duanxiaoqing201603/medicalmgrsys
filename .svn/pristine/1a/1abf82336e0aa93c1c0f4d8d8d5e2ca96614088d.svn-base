import axios from 'axios'
import qs from 'qs'
import store from './store/store'

//axios.defaults.timeout = 5000;                        //响应时间
//axios.defaults.headers.post['x-token'] = localStorage.getItem('token');//'123.123.123'
axios.defaults.headers['Content-Type'] = 'application/json';  //配置请求头
//axios.defaults.baseURL = 'http://193.168.11.186';   //配置接口地址
//const baseURL = !window.location.origin ? window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') : window.location.origin
const baseURL = 'http://test.edrmd.com:1443' //本地跑用这个

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(localStorage.getItem("token")){
        axios.defaults.headers['x-token'] = JSON.parse(localStorage.getItem("token"));//'123.123.123'
        /*console.log(axios.defaults.headers['x-token']);*/
        //console.log('request');
    }


    /*if(config.method  === 'post'){
        config.data = qs.stringify(config.data);//qs.stringify()将对象 序列化成URL的形式，以&进行拼接
    }*/
    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(res.headers['x-token']){
        localStorage.setItem("token",JSON.stringify(res.headers['x-token']));
        /*console.log(localStorage.getItem('token'),JSON.stringify(res.headers['x-token']));*/
        //console.log('response');
    }
    if(!res.data.success){
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});


//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    //这里先执行的，执行的时候还没有执行：axios.interceptors.request.use，所以token没有设置上新的，还是取到的是旧值。
    //所以我在这里重新设置了一下就好了，还得再梳理一下执行顺序。感觉这样写法不是太好。
    //console.log('fetchPost');
    axios.defaults.headers['x-token'] = JSON.parse(localStorage.getItem("token"));
    return new Promise((resolve, reject) => {
        axios.post(baseURL + url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    axios.defaults.headers['x-token'] = JSON.parse(localStorage.getItem("token"));
    return new Promise((resolve, reject) => {
        axios.get(baseURL + url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function fetchGetTest(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURL + url,{responseType: 'blob' })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    fetchPost,
    fetchGet,
    fetchGetTest
}

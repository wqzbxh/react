/**
 * 发送异步请求的函数ajax
 * 
 */
import axios from "axios";
import { message } from 'antd';

export default function ajax(url,data = {},type='GET'){

    return new Promise((resolve,reject)=>{
        let promise;
        if(type === 'GET'){//发送GET请求
            promise = axios.get(url,{params:data});
         }else if(type ==='POST'){//发送POST请求
            promise =  axios.post(url,data)
         }
         promise.then(response=>{
            resolve(response);
         }).catch(error=>{
            message.error(error.message)
         })
    })
    
}



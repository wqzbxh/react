/**
 * 包含应用中所有接口请求函数
 */


// //请求登录接口
// ajax('http://local.fr.com/login',{username:"admin",password:"admin123"},"POST")

import ajax from "./ajax";
const Host = ''

export const regLoign = (username,password) => ajax(Host+'/login',{username,password},'POST')
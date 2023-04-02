
import { useNavigate,Navigate  } from "react-router-dom";
import React, { Component } from "react";
import './login.less';

import logo from './images/logo.png'
import { Form, Icon, Input, Button, message } from 'antd';
import { regLoign } from "../../api"; 
import memoryUtils from "../../utils/memoryUtils";
import localstorageUnits from "../../utils/localstorageUnits";
/**
 * 登录的路由组件
 */
const Item = Form.Item
export const withNavigation = (Component) => {
    return (props) => <Component {...props} navigate={useNavigate()} />;
};

 class Login extends React.Component {
  handleSubmit=(event)=> {
        // 阻止事件默认行为
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
            const {username,password} = values
            const response =  await regLoign(username,password);
            const result = response.data;
            if(result.code === 200){
                const username = result.data;
                memoryUtils.user = username; 
                localstorageUnits.saveUser(username)
                message.success(result.msg);
                this.props.navigate('/');
            }else{
                //登陆失败
                message.error(result.msg)
            }
          }else{
            console.log('ERROR')
          }
        });
    }
    validator = (rule, value, callback) => {
        // console.log(rule, value)
        const length = value && value.length
        const pwdReg = /^[a-zA-Z0-9_]+$/
        if (!value) {
        // callback 如果不传参代表校验成功，如果传参代表校验失败，并且会提示错误
        callback('必须输入密码')
        } else if (length < 4) {
        callback('密码必须大于 4 位')
        } else if (length > 12) {
        callback('密码必须小于 12 位')
        } else if (!pwdReg.test(value)) {
        callback('密码必须是英文、数组或下划线组成')
        } else {
        callback() // 必须调用 callback
        }
    }
    render() {
        const form = this.props.form;
        const { getFieldDecorator } = form;
        if(memoryUtils.user.username){
            return <Navigate to="/" />;
        }
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </header>
                <section className='login-content'>
                  <h3>用户登陆</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {/* 声明式验证 */}
                            {getFieldDecorator('username', {
                                rules: [{ required: true,whitespace:true, message: 'Please input your username!' },
                                        { min: 4, message: '最少四位 ' },
                                        { max: 8, message: '最多八位 ' },
                                        { pattern:/^[a-zA-Z0-9_]+$/, message: '用户名需要由数字下划线字母构成 ' }],
                            })(
                            <Input   prefix={<Icon type="instagram" style={{ color: 'rgba(0,0,0,.25)' }} />}   placeholder="用户名"  />,
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password',{rules:[{validator:this.validator}]})( 
                                  <Input
                                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                  type="password"
                                  placeholder="密码"
                                  />,
                            )}
                                   
                           
                               
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
/**
 * 高阶函数
 * 
 * 高阶组件
 */
const Wrapped = Form.create()(withNavigation(Login))

export default Wrapped

/**
 * 前台表单验证
 * 收集数据
 * 发送请求
 */
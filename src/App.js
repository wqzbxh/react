import React,{ Component } from "react";
// import { Button,message} from "antd";
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

/**
import 
 * 应用根组件
 */
export default class App extends Component{
    //  handleClick = () => {
    //     message.success('Hello, Ant Design!');
    // }

    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" Component={Login}></Route>
                    <Route path="/" Component={Admin}></Route>
                </Routes>
            </BrowserRouter>
        )
    
    }
}

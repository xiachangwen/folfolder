/*
 * @Author: 夏昌文 
 * @Date: 2019-08-14 19:34:22 
 * @Last Modified by: 夏昌文
 * @Last Modified time: 2019-08-15 19:33:08
 */
import React, { Component } from 'react'
import Header from '../../components/header'
import {login, captcha} from '../../api/user'

export default class Login extends Component {
    state = {
        username:'',
        password:'',
        captcha:'',
        htmel:''
    }
    render() {
        let {username, password, captcha} = this.state
        return (
            <>
                <Header title='登录' flag={true} />

                <div className='main'>
                    <div className='login'>
                        <div className='login-head'>
                            LOGO
                        </div>
                        <input placeholder='输入用户名' value={username} name='username' onChange={this.headchang} />
                        <input placeholder='输入密码' value={password} name='password' onChange={this.headchang} />
                        <p><input placeholder='输入验证码' value={captcha} name='captcha' onChange={this.headchang} /> <label  ref='svg'></label></p>
                        <button onClick={this.headleClick}> 登录</button>
                    </div>
                </div>
            </>
        )
    }
    /**
     * 注册 登录 信息
     */
    headchang = (e) => {
        let names = e.target.name
        this.setState({[names]:e.target.value})
    }
    /**
     * 提交注册登录信息
     */
    headleClick = () => {
        
        let obj = {
            username:this.state.username,
            password:this.state.password,
            captcha:this.state.captcha
        }
        
        login(obj).then(res => {
            console.log(res.data)
            if(res.data.code === 1){
                alert('注册成功')
                this.props.history.push({
                    pathname:'/my',
                    title:this.state.username
                })
            } else if(res.data.code === 0){
                alert('用户名或密码错误')
            }
        })
        
    }
    /**
     * 获取验证码
     */
    
    componentDidUpdate() {
        
        this.refs.svg.innerHTML = this.state.htmel
        // console.log(this.state)
    }
    componentDidMount() {
        captcha().then(res => {
            console.log(res.data)
            this.setState({htmel:res.data.data})
        })
    }
    
}


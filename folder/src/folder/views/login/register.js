/*
 * @Author: 夏昌文 
 * @Date: 2019-08-14 19:34:22 
 * @Last Modified by: 夏昌文
 * @Last Modified time: 2019-08-15 19:34:43
 */
import React, { Component } from 'react'
import Header from '../../components/header'
import {register} from '../../api/user'

export default class Register extends Component {
    state = {
        username:'',
        password:'',
        nickname:'',
        
    }
    render() {
        let {username, password, nickname} = this.state
        return (
            <>
                <Header title='注册' flag={true} />

                <div className='main'>
                    <div className='login'>
                        <div className='login-head'>
                            注册
                        </div>
                        <input placeholder='输入用户名' value={username} name='username' onChange={this.headchang} /> 
                        <input placeholder='输入密码' value={password} name='password' onChange={this.headchang} />
                        <input placeholder='输入昵称' value={nickname} name='nickname' onChange={this.headchang} /> 
                        <button onClick={this.headleClick}>注册</button>
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
        register(this.state).then(res => {
            console.log(res.data)
            if(res.data.code === 0){
                this.props.history.push({
                    pathname:'/my',
                    title:this.state.username
                })
            } else if(res.data.code === 1){
                this.props.history.push('/login')
            }
        })
    }
   
}


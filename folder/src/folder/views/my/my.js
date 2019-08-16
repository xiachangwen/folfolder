

import React, { Component } from 'react'
import Header from '../../components/header'

export default class My extends Component {
    state = {
        title:''
    }
    render() {
        let {title} = this.state
        return (
            <>
                <Header title='个人中心'  flag={true} />
                <div className='main'>
                    <div className='maiss'>
                       
                        <div className='maiss-head'>
                            <p></p>
                            <button onClick={this.headClick}>{title ? title : '登录/注册'}</button>
                        </div>

                    </div>
                    
                </div>
            </>
        )
    }

    componentDidMount() {
        // console.log(this.props.location.title)
        this.setState({title:this.props.location.title})
    }
   

    headClick = () => {
        this.props.history.push('/register')
    }
}

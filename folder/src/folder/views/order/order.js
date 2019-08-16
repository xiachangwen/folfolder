import React, { Component } from 'react'
import Header from '../../components/header'

export default class Order extends Component {
    render() {
        return (
            <>
                <Header title='我的订单' flag={true} />
                <div className='main'>
                    订单
                </div>

            </>
        )
    }
}

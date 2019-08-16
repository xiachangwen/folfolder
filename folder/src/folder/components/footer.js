import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/city'><b>城市</b></NavLink>
                <NavLink to='/order'><b>订单</b></NavLink>
                <NavLink to='/my'><b>我的</b></NavLink>
            </footer>
        )
    }
}

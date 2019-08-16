import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

 class Header extends Component {
    render() {
        let {title, flag} = this.props
        return (
            <header>
                <span style={{display: flag ? 'block' : 'none'}} onClick={this.headle}>&lt;</span>
                <p>{title}</p>
            </header>
        )
    }

    headle = () => {
        this.props.history.go(-1)
    }
}

export default withRouter(Header)
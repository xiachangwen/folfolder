import React, { Component } from 'react'
import Header from '../../../components/header'

import {godlist} from '../../../store/shop/shop.active'
import {connect} from 'react-redux'

class CityList extends Component {
    state = {
        title : ''
    }
    render() {
        let {title} = this.state
        let {godlist} = this.props
        return (
            <>
                <Header title={title} flag={false} />
                <div className='main'>
                    <div className='clist'>             
                        <div className='clist-list'>
                            {
                                godlist && godlist.map((item,index) => <dl key={index} onClick={this.clickFn.bind(this,item.goods_id)} >
                                    <dd>
                                        <h3>{item.goods_name}</h3>
                                        <p>￥ {item.market_price}/天</p>
                                    </dd>
                                    <dt>

                                    </dt>
                                </dl>)
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        // console.log(this.props)
        let id = this.props.match.params.id
        let name = this.props.location.title
        this.setState({title:name})
        this.props.goods(id)
    }

    clickFn (id) {
        // console.log(id)
        this.props.history.push(`/cityDetal/${id}`)
    }
}

export default connect((state)=>{
    return {
        godlist : state.shop.godlist
    }
}, (dispatch)=>{
    return {
        goods(id){
            dispatch(godlist(id))
        }
    }
})(CityList)
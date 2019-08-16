import React, { Component } from 'react'
import Header from '../../../components/header'
import {delat} from '../../../store/shop/shop.active'
import {connect} from 'react-redux'

class CityDetal extends Component {
    render() {
        return (
            <>
                <Header title='商品详情' flag={true} />
                <div className='main'>

                </div>
            </>
        )
    }


    componentDidMount() {
        let id = this.props.match.params.id
        this.props.delater(id)
        // console.log(delat(id))
    }
    
}
export default connect((state)=>{
    return {}
},(dispatch)=>{
    return {
        delater(id){
            dispatch(delat(id))
        }
    }
})(CityDetal)
import React, { Component } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import {citylist} from '../../store/shop/shop.active'
import {connect} from 'react-redux'
import CityItem from './page/cityItem'

 class City extends Component {
    render() {
        let {citylist} = this.props
        return (
            <>  
                <Header title='租赁翻译机' flag={false} />
                <div className='main'>
                    
                    <div className='city'>

                        <div className='city-head'>
                            <input placeholder='目的地查询' />
                            <i className='iconfont icon-fangdajing'></i>
                        </div>

                        <div className='city-hot'>
                            <div className='city-hot-head'>
                                <h3>热门城市</h3>
                                <div  className='city-list'>
                                    {
                                        citylist && citylist.map((item,index) => <CityItem key={index} item={item} />)
                                    }
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>

                </div>
                <Footer />
            </>
        )
    }

    componentDidMount() {
        this.props.gitcity()
    }
}

export default connect((state)=>{
    return {
        citylist: state.shop.citylist
    }
},(dispatch)=>{
    return {
        gitcity(){
            dispatch(citylist)
        }
    }
})(City)

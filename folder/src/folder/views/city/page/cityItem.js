import React from 'react'

import {withRouter} from 'react-router-dom'

 function List(props) {
    // console.log(props)
    let {item} = props
    return (
        <div onClick={headClick}>
            {item.store_name}
        </div>
    )

   function headClick () {
        // console.log(props.history)
        props.history.push({
            pathname:`/cityList/${item.store_id}`,
            title:item.store_name
        })
    }
}
export default withRouter(List)
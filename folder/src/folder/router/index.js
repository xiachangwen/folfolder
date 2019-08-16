import React, { Component } from 'react'

import {BrowserRouter} from 'react-router-dom'
import routes from './routerConfig'
import RouterViews from './routerViews'

export default class RootRouter extends Component {
    render() {
        
       return <BrowserRouter>
                <RouterViews routes={routes} />
            </BrowserRouter>
        
    }
}

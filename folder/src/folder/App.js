import React from 'react';

import './css/style.scss'
import Router from './router/index'
import store from './store/index'
import {Provider} from 'react-redux'
import './fonts/iconfont.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
      
    </div>
  );
}

export default App;

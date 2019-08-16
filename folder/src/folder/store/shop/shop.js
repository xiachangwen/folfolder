import {CITY_LIST, CITY_GOOD} from './shop.type'


const shop = (state={
    citylist: [],
    godlist: []
}, action) => {
    switch(action.type){
        case CITY_LIST:{  //热门国家
            // console.log(action)
            let {list} = action
            state.citylist = list

            return {
                ...state
            }
        }

        case CITY_GOOD:{  //国家店铺
            // console.log(action.arr)
            let {arr} = action

            state.godlist = arr

            return {
                ...state
            }

        }

        default : return state
    }
}

export default shop
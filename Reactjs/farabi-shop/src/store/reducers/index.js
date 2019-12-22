import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    Items: itemsReducer,
    Cart: cartReducer
})
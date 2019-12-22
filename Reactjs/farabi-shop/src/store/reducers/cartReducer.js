import actionsTypes from "../actionsTypes"

const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotalPrice: 0
}

const changeCartItem = (state, item, type) => {
    let newCartItems = [...state.cartItems]
    let newCount = state.cartCount
    let newCartTotalPrice = state.cartTotalPrice
    let index = newCartItems.findIndex(_item => _item.id === item.id)
    if (index > -1) {
        if(type === '+1') {
            newCartItems[index] = {
                ...newCartItems[index],
                count: newCartItems[index].count + 1
            }
        } else {
            const newCount = newCartItems[index].count - 1
            if (newCount === 0) {
                newCartItems.splice(index, 1)
            } else {
                newCartItems[index] = {
                    ...newCartItems[index],
                    count: newCount
                }
            }
        }
    } else {
        newCartItems.push({...item, count: 1, maxCount: item.count})
    }
    if (type === '+1') {
        newCount++
        newCartTotalPrice += item.price
    } else {
        newCount--
        newCartTotalPrice -= item.price
    }
    return {
        cartItems: newCartItems,
        cartCount: newCount,
        cartTotalPrice: newCartTotalPrice
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.INCREAMENT_CART_ITEMS:
            return Object.assign({}, state, changeCartItem(state, action.payload, '+1'))
            // return Object.assign({}, state, {
            //     cartItems: [...state.cartItems, action.payload]
            // })
        case actionsTypes.DECREAMENT_CART_ITEMS:
            return Object.assign({}, state, changeCartItem(state, action.payload, '-1'))
        default:
            return state
    }
}
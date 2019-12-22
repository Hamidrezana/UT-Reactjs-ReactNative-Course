import actionsTypes from "../actionsTypes";

export function increamentCartItems(payload) {
    return {
        type: actionsTypes.INCREAMENT_CART_ITEMS,
        payload
    }
}

export function decreamentCartItems(payload) {
    return {
        type: actionsTypes.DECREAMENT_CART_ITEMS,
        payload
    }
}
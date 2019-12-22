import actionsTypes from "../actionsTypes";

export function changeSearchText(payload) {
    return {
        type: actionsTypes.CHANGE_SEARCH_TEXT,
        payload
    }
}

export function changeMinPrice(payload) {
    return {
        type: actionsTypes.CHANGE_MIN_PRICE,
        payload
    }
}

export function changeMaxPrice(payload) {
    return {
        type: actionsTypes.CHANGE_MAX_PRICE,
        payload
    }
}

export function changeCategory(payload) {
    return {
        type: actionsTypes.CHANGE_CATEGORY,
        payload
    }
}
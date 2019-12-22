export const addToman = (price) => `${price} تومان`

export const checkCategory = (obj) => {
    for (let key in obj) {
        if (obj[key] !== null) return true
    }
    return false
}
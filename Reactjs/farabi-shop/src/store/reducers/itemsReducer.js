import actionsTypes from "../actionsTypes"

const INITIAL_STATE = {
    items: [{"id":1,"title":"کلاه","routeName":"hats","items":[{"id":1,"price":2500,"imageUrl":"https://i.ibb.co/ZYW3VTp/brown-brim.png","name":"کلاه 1","count":10},{"id":2,"price":1800,"imageUrl":"https://i.ibb.co/ypkgK0X/blue-beanie.png","name":"کلاه 2","count":5},{"id":3,"price":3500,"imageUrl":"https://i.ibb.co/QdJwgmp/brown-cowboy.png","name":"کلاه 3","count":8},{"id":4,"price":2500,"imageUrl":"https://i.ibb.co/RjBLWxB/grey-brim.png","name":"کلاه 4","count":14},{"id":5,"price":1800,"imageUrl":"https://i.ibb.co/YTjW3vF/green-beanie.png","name":"کلاه 5","count":11},{"id":6,"price":1400,"imageUrl":"https://i.ibb.co/rKBDvJX/palm-tree-cap.png","name":"کلاه 6","count":9},{"id":7,"price":1800,"imageUrl":"https://i.ibb.co/bLB646Z/red-beanie.png","name":"کلاه 7","count":4},{"id":8,"price":1400,"imageUrl":"https://i.ibb.co/1f2nWMM/wolf-cap.png","name":"کلاه 8","count":17},{"id":9,"price":1600,"imageUrl":"https://i.ibb.co/X2VJP2W/blue-snapback.png","name":"کلاه 9","count":16}]},{"id":2,"title":"کفش","routeName":"sneakers","items":[{"id":10,"price":22000,"imageUrl":"https://i.ibb.co/0s3pdnc/adidas-nmd.png","name":"کفش 10","count":3},{"id":11,"price":28000,"imageUrl":"https://i.ibb.co/dJbG1cT/yeezy.png","name":"کفش 11","count":6},{"id":12,"price":11000,"imageUrl":"https://i.ibb.co/bPmVXyP/black-converse.png","name":"کفش 12","count":12},{"id":13,"price":16000,"imageUrl":"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png","name":"کفش 13","count":9},{"id":14,"price":16000,"imageUrl":"https://i.ibb.co/QcvzydB/nikes-red.png","name":"کفش 14","count":13},{"id":15,"price":16000,"imageUrl":"https://i.ibb.co/fMTV342/nike-brown.png","name":"کفش 15","count":17},{"id":16,"price":19000,"imageUrl":"https://i.ibb.co/w4k6Ws9/nike-funky.png","name":"کفش 16","count":5},{"id":17,"price":20000,"imageUrl":"https://i.ibb.co/Mhh6wBg/timberlands.png","name":"کفش 17","count":17}]},{"id":3,"title":"ژاکت","routeName":"jackets","items":[{"id":18,"price":12500,"imageUrl":"https://i.ibb.co/XzcwL5s/black-shearling.png","name":"ژاکت 18","count":13},{"id":19,"price":9000,"imageUrl":"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png","name":"ژاکت 19","count":9},{"id":20,"price":9000,"imageUrl":"https://i.ibb.co/N71k1ML/grey-jean-jacket.png","name":"ژاکت 20","count":7},{"id":21,"price":16500,"imageUrl":"https://i.ibb.co/s96FpdP/brown-shearling.png","name":"ژاکت 21","count":4},{"id":22,"price":18500,"imageUrl":"https://i.ibb.co/M6hHc3F/brown-trench.png","name":"ژاکت 22","count":12}]},{"id":4,"title":"زنانه","routeName":"womens","items":[{"id":23,"price":2500,"imageUrl":"https://i.ibb.co/7CQVJNm/blue-tank.png","name":"زنانه 23","count":14},{"id":24,"price":2000,"imageUrl":"https://i.ibb.co/4W2DGKm/floral-blouse.png","name":"زنانه 24","count":5},{"id":25,"price":8000,"imageUrl":"https://i.ibb.co/KV18Ysr/floral-skirt.png","name":"زنانه 25","count":14},{"id":26,"price":8000,"imageUrl":"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png","name":"زنانه 26","count":4},{"id":27,"price":4500,"imageUrl":"https://i.ibb.co/KmSkMbH/striped-sweater.png","name":"زنانه 27","count":11},{"id":28,"price":13500,"imageUrl":"https://i.ibb.co/v1cvwNf/yellow-track-suit.png","name":"زنانه 28","count":11},{"id":29,"price":2000,"imageUrl":"https://i.ibb.co/qBcrsJg/white-vest.png","name":"زنانه 29","count":14}]},{"id":5,"title":"مرادنه","routeName":"mens","items":[{"id":30,"price":32500,"imageUrl":"https://i.ibb.co/xJS0T3Y/camo-vest.png","name":"مرادنه 30","count":13},{"id":31,"price":2000,"imageUrl":"https://i.ibb.co/qMQ75QZ/floral-shirt.png","name":"مرادنه 31","count":12},{"id":32,"price":2500,"imageUrl":"https://i.ibb.co/55z32tw/long-sleeve.png","name":"مرادنه 32","count":11},{"id":33,"price":2500,"imageUrl":"https://i.ibb.co/RvwnBL8/pink-shirt.png","name":"مرادنه 33","count":15},{"id":34,"price":4000,"imageUrl":"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png","name":"مرادنه 34","count":11},{"id":35,"price":2500,"imageUrl":"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png","name":"مرادنه 35","count":6}]}],
    searchText: '',
    minPrice: null,
    maxPrice: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.CHANGE_ITEMS:
            return Object.assign({}, state, {
                items: action.payload
            })
        case actionsTypes.CHANGE_SEARCH_TEXT:
            return Object.assign({}, state, {
                searchText: action.payload
            })
        case actionsTypes.CHANGE_MIN_PRICE:
            return Object.assign({}, state, {
                minPrice: action.payload
            })
        case actionsTypes.CHANGE_MAX_PRICE:
            return Object.assign({}, state, {
                maxPrice: action.payload
            })
        default:
            return state
            
    } 
}
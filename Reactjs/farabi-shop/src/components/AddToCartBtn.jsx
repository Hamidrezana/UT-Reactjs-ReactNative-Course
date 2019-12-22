import React from 'react'
import Strings from '../utils/Strings'
import { connect } from 'react-redux'
import { increamentCartItems } from '../store/actions/cartActions'


const mapStateToProps = state => {
    return {
        cartItems: state.Cart.cartItems
    }
}
const mapDispatchToProps = { increamentCartItems }

function AddToCartBtn(props) {
    const itemInCart = props.cartItems.find(_item => props.item.id === _item.id)

    const addToCart = () => {
        props.increamentCartItems(props.item)
    }
    // const finished = itemInCart ? (itemInCart.maxCount === itemInCart.count) : false
    const finished = itemInCart ? (props.item.count === itemInCart.count) : false
    return (
        <button
            disabled={finished}
            onClick={addToCart}
            className="btn btn-primary mb-2"
        >
            {finished ? Strings.finished : Strings.addToCart}
        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn)

import React from 'react'
import Strings from '../../utils/Strings'
import { addToman } from '../../utils/functions'
import '../../styles/dropdown.css'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        cartCount: state.Cart.cartCount,
        cartTotalPrice: state.Cart.cartTotalPrice
    }
}

function DropdownCart(props) {
    return (
        <div className="cart-dropdown-container">
            <p>{Strings.totalCount}</p>
            <p>{props.cartCount}</p>
            <p>{Strings.totalPrice}</p>
            <p>{addToman(props.cartTotalPrice)}</p>
        </div>
    )
}

export default connect(mapStateToProps)(DropdownCart)

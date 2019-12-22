import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        cartCount: state.Cart.cartCount
    }
}

function CountSpan(props) {
    const style = {
        top: props.top,
        right: props.right
    }
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faShoppingCart} size={props.size}/>
            <span style={style} className="cart-count">{props.cartCount}</span>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(CountSpan)
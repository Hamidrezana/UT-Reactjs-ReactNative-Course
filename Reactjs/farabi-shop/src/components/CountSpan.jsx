import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CountSpan(props) {
    const style = {
        top: props.top,
        right: props.right
    }
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faShoppingCart} size={props.size}/>
            <span style={style} className="cart-count">{1}</span>
        </React.Fragment>
    )
}

export default CountSpan
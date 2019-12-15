import React from 'react'
import Strings from '../../utils/Strings'
import { addToman } from '../../utils/functions'
import '../../styles/dropdown.css'
function DropdownCart() {
    return (
        <div className="cart-dropdown-container">
            <p>{Strings.totalCount}</p>
            <p>2</p>
            <p>{Strings.totalPrice}</p>
            <p>{addToman(2000)}</p>
        </div>
    )
}

export default DropdownCart

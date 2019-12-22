import React from 'react'
import { addToman } from '../../utils/functions'
import Count from './Count'
import Strings from '../../utils/Strings'
import CountSpan from '../CountSpan'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        cartItems: state.Cart.cartItems
    }
}


function Cart(props) {
    return (
        <div className="sticky-position">
            <div className="d-flex align-items-center">
                <CountSpan size='2x'/>
                <h5 className="mr-2 mb-0">{Strings.cart}</h5>
            </div>
            {
                props.cartItems.map((item, idx) =>
                    <div key={idx} className="row my-2">
                        <div className="col-12">
                            {item.name}
                        </div>
                        <div className="row w-100 m-0 justify-content-between">
                            <div className="col-md-8 col-12">
                                <span>{addToman(item.price)}</span>
                            </div>
                            <div className="col-md-4 col-6">
                                <Count item={item}/>
                            </div>
                        </div>
                    </div>       
                )
            }
        </div>
    )
}

export default connect(mapStateToProps)(Cart)

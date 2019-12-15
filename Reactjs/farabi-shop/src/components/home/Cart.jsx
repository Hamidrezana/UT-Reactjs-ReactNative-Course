import React from 'react'
import { addToman } from '../../utils/functions'
import Count from './Count'
import Strings from '../../utils/Strings'
import CountSpan from '../CountSpan'

function Cart(props) {
    return (
        <div className="sticky-position">
            <div className="d-flex align-items-center">
                <CountSpan size='2x'/>
                <h5 className="mr-2 mb-0">{Strings.cart}</h5>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    کلاه 3
                </div>
                <div className="row w-100 m-0 justify-content-between">
                    <div className="col-md-8 col-12">
                        <span>{addToman(2000)}</span>
                    </div>
                    <div className="col-md-4 col-6">
                        <Count />
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    کلاه 2
                </div>
                <div className="row w-100 m-0 justify-content-between">
                    <div className="col-md-8 col-12">
                        <span>{addToman(1000)}</span>
                    </div>
                    <div className="col-md-4 col-6">
                        <Count />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

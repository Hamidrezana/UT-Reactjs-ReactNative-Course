import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { increamentCartItems, decreamentCartItems } from '../../store/actions/cartActions'

const mapDispatchToProps = { increamentCartItems, decreamentCartItems }

function Count(props) {

    const addToCart = () => {
        props.increamentCartItems(props.item)
    }

    const decreamentCart = () => {
        props.decreamentCartItems(props.item)
    }

    const finished = props.item.count === props.item.maxCount

    return (
        <div className="input-group">
            <div className="input-group-append">
                <button
                    disabled={finished}
                    onClick={addToCart}
                    className="btn btn-outline-primary d-flex"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <span className="form-control count-span">{props.item.count}</span>
            <div className="input-group-prepend">
                <button
                    onClick={decreamentCart}
                    className="btn btn-outline-primary d-flex"
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Count)

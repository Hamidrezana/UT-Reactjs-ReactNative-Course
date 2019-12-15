import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function Count(props) {
    return (
        <div className="input-group">
            <div className="input-group-append">
                <button className="btn btn-outline-primary d-flex">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <span className="form-control count-span">{5}</span>
            <div className="input-group-prepend">
                <button className="btn btn-outline-primary d-flex">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    )
}

export default Count

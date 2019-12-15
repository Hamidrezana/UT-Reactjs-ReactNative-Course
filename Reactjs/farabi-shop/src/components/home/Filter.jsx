import React from 'react'
import Strings from '../../utils/Strings'
import { addToman } from '../../utils/functions'



const Range = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={props.name}>{Strings[props.name]}</label>
                {/* <span>{addToman(range)}</span> */}
            </div>
            <input step='100' min='1400' max='32500' type="range" className="custom-range" id={props.name} />
        </React.Fragment>
    )
}

function Filter(props) {
    const filters = [
        {
            id: 1,
            name: 'hats'
        },
        {
            id: 2,
            name: 'sneakers'
        },
        {
            id: 3,
            name: 'jackets'
        },
        {
            id: 4,
            name: 'men'
        },
        {
            id: 5,
            name: 'women'
        }
    ]
    const ranges = [
        {
            name: 'fromPrice'
        },
        {
            name: 'toPrice'
        }
    ]
    return (
        <div className="sticky-position">
            <h5>{Strings.filter}</h5>
            {
                filters.map(({name, id}) =>
                    <div key={id} className="form-check">
                        <input name={name} className="form-check-input" type="checkbox" id={name} />
                        <label className="form-check-label mr-4" htmlFor={name}>
                            {Strings.filters[name]}
                        </label>
                    </div>   
                )
            }
            {
                ranges.map(({name}, index) =>
                    <Range key={index} name={name} />
                )
            }
        </div>
    )
}

export default Filter

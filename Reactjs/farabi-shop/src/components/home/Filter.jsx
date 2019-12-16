import React, {useState} from 'react'
import Strings from '../../utils/Strings'
import { addToman } from '../../utils/functions'
import { connect } from 'react-redux'
import { changeMinPrice, changeMaxPrice  } from '../../store/actions/itemsActions'


const mapStateToProps = state => {
    const { minPrice, maxPrice } = state.Items
    return {
        minPrice,
        maxPrice
    }
}


const mapDispatchToProps = { changeMinPrice, changeMaxPrice }

const Range = (props) => {
    const initialState = props.name === 'fromPrice' ? 1400 : 32500
    const [range, setRange] = useState(initialState)
    const onChangeFromCom = (e) => {
        setRange(e.target.value)
        props.onChangeFromParent(props.name, e.target.value)
    }
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={props.name}>{Strings[props.name]}</label>
                <span>{addToman(range)}</span>
            </div>
            <input value={range} onChange={(e) => onChangeFromCom(e)} step='100' min='1400' max='32500' type="range" className="custom-range" id={props.name} />
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

    const changeRange = (name, value) => {
        if (name === 'toPrice') {
            props.changeMaxPrice(value)
        } else {
            props.changeMinPrice(value)
        }
    }
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
                    <Range
                        key={index}
                        name={name}
                        onChangeFromParent={changeRange}
                    />
                )
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

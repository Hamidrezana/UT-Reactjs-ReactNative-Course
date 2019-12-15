import React from 'react'
import Strings from '../utils/Strings'
import { addToman } from '../utils/functions'
import { withRouter } from 'react-router-dom'

function CardItem(props) {
    const { item: {imageUrl, price, name, id}, catagoryId } = props
    const goToItemPage = () => {
        props.history.push(`/item/${catagoryId}/${id}`)
    }
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt='محصول' />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {
                    !props.fromItemPage ?
                    <React.Fragment>
                        <p className="card-text">{addToman(price)}</p>
                        <button className="btn btn-primary mb-2">{Strings.addToCart}</button>
                    </React.Fragment> : null
                }
                <button onClick={goToItemPage} className="btn btn-primary w-100">{Strings.more}</button>
            </div>
        </div>
    )
}

export default withRouter(CardItem)

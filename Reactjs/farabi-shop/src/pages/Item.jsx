import React from 'react'
import { useParams } from 'react-router-dom'
import Items from '../utils/Items'
import { addToman } from '../utils/functions'
import Strings from '../utils/Strings'
import CardItem from '../components/CardItem'

const random = (max) => Math.floor(Math.random() * max) + 0

function ItemPage() {
    const { itemId, catagoryId } = useParams()
    const catagory = Items[catagoryId - 1]
    const item = catagory.items.find(item => item.id == itemId)
    const max = catagory.items.length - 1
    const suggestion = ['', '', ''].map(i => catagory.items[random(max)])
    return (
        <div className="container mc">
            <div className="row mb-3">
                <div className='col-md-4 col-12'>
                    <img src={item.imageUrl} />
                </div>
                <div className="col-md-8 col-12">
                    <p>{item.name}</p>
                    <p>{addToman(item.price)}</p>
                    <button className="btn btn-primary">{Strings.addToCart}</button>
                </div>
            </div>
            <div className="row my-2">
                {
                    suggestion.map((item, index) =>
                        <div key={index} className="col-md-4 col-12">
                            <CardItem fromItemPage catagoryId={catagoryId} item={item}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemPage

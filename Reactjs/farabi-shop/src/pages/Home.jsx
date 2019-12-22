import React from 'react'
// import Items from '../utils/Items'
import CardItem from '../components/CardItem'
import Filter from '../components/home/Filter'
import Cart from '../components/home/Cart'
import { connect } from 'react-redux'
import { checkCategory } from '../utils/functions'

const mapStateToProps = state => {
    const { items, searchText, minPrice, maxPrice, category } = state.Items
    const checkFilter = checkCategory(category)
    let filteredItems = items
    if(checkFilter)
        filteredItems = items.filter(item => 
                (category.hats && item.id === 1) ||
                (category.sneakers && item.id === 2) ||
                (category.jackets && item.id === 3) ||
                (category.women && item.id === 4) ||
                (category.men && item.id === 5)
            )
    // Better way to filter items
    const filters = {
        price: price => (
            (
                (!minPrice) || 
                (price >= minPrice)
            ) && 
            (
                (!maxPrice) || 
                (price <= maxPrice)
            )
        ),
        name: name => (name.includes(searchText))
    }
    if (minPrice || maxPrice || searchText)
        filteredItems = items.map(item => {
            const newItems = item.items.filter(innerItem => Object.keys(filters).every(key => filters[key](innerItem[key])))
            return {
                ...item,
                items: newItems
            }

        })

    // Filter method coded in class

    // let filteredItems = items.map(item => {
    //     const newItems = item.items.filter(
    //         innerItem => innerItem.name.includes(searchText))
    //     return {
    //         ...item,
    //         items: newItems
    //     }
    // })
    // filteredItems = items.map(item => {
    //     const newItems = item.items.filter(
    //         innerItem => ( !minPrice || innerItem.price >= minPrice ) && ( !maxPrice || innerItem.price <= maxPrice ))
    //     return {
    //         ...item,
    //         items: newItems
    //     }
    // })
    return {
        items: filteredItems
    }
}

function HomePage(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-12">
                    <Filter />
                </div>
                <div className="col-lg-6 col-12">
                    {
                        props.items.map((catagory, idx) => 
                            catagory.items.length === 0 ?
                            null :
                            <div key={idx} className='row mt-4'>
                                <div className='col-12 my-2'>
                                    <h2>{catagory.title}</h2>
                                </div>
                                {
                                    catagory.items.map((item, idy) => 
                                        <div key={idy} className='col-md-4 p-2'>
                                            <CardItem catagoryId={catagory.id} item={item}/>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className="col-lg-3 col-12">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(HomePage)

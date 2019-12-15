import React from 'react'
import Items from '../utils/Items'
import CardItem from '../components/CardItem'
import Filter from '../components/home/Filter'
import Cart from '../components/home/Cart'

function HomePage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-12">
                    <Filter />
                </div>
                <div className="col-lg-6 col-12">
                    {
                        Items.map((catagory, idx) => 
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

export default HomePage

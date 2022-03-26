import React, { useState } from 'react'
import ProductBox from './Sections/ProductBox'
import './Sections/Product.css'
import CartButton from './Sections/CartButton'

function Product(props) {

    const renderMenu = props.menu.map((item) => {
        if (props.selectedCategory === 0 || props.selectedCategory === item.category) {
            return (
                <div key={item.id}>
                    <ProductBox product={item} />
                    <CartButton />
                </div>
            )
        }   
    })

    return (
        <div className="product">
            {renderMenu}
        </div>
    )
}

export default Product

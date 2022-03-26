import React from 'react'
import ImageSlider from '../../../utils/ImageSlider'
import { formatPrice } from '../../../utils/Utility.js'

function ProductBox(props) {
    return (
        <div className="product-box">
            <a href={`/product/${props.product.id}`}>
            <div className="product-image"><ImageSlider images={props.product.image}/></div>
            <div className="product-name">{props.product.name}</div>
            <div className="product-price">{formatPrice(props.product.price)}</div>
            </a>
        </div>
    )
}

export default ProductBox

import React from 'react'
import { formatPrice } from '../../../utils/Utility.js'

function ProductInfo(props) {

  return (
    <div className="productInfo">

      <div className="content">

        <div className="name-wrapper">
          <div className="badge">(인기)</div>
          <div className="name">{props.product.name}</div>
        </div>

        <div className="description">상품 설명~~ 맛있는 아인슈페너~~~~~~<br />설명2</div>

        <div className="price-wrapper">
          <div className="title">가격</div>
          <div className="price">{props.product.price}</div>
        </div>

      </div>

    </div>
  )
}

export default ProductInfo
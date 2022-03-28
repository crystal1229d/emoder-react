import React from 'react'
// import { formatPrice } from '../../../utils/Utility.js'
import DetailProductOptionBox from './DetailProductOptionBox.js'

function ProductInfo(props) {

  const renderOptionGroup = props.product.optionGroup && props.product.optionGroup.map((optionGroupItem, index) => {
    return (
      <DetailProductOptionBox key={index} optionGroup={optionGroupItem} />
    )
  })

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
          <div className="price">{props.product.price}원</div>
        </div>

        <div className="optiongroup-wrapper">
          {renderOptionGroup}
        </div>

      </div>

    </div>
  )
}

export default ProductInfo
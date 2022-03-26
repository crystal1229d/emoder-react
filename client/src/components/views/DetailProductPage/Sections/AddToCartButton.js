import React from 'react'
import { formatPrice } from '../../../utils/Utility.js'

function AddToCartButton(props) {
  return (
    <div className="addToCartButton">
      <div className="button">
        {formatPrice(props.totalSum)}원 담기
      </div>
    </div>
  )
}

export default AddToCartButton
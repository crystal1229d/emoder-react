import React from 'react'
import ImageSlider from '../../../utils/ImageSlider'

function ProductImage(props) {
  return (
    <div className="productImage">
      <ImageSlider images={props.image} />
    </div>
  )
}

export default ProductImage
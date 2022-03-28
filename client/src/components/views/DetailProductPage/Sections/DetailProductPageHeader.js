import React from 'react'
import { FiArrowLeft, FiZoomIn } from 'react-icons/fi';

function DetailProductPageHeader() {
  return (
    <div className="detailProductPageHeader">
        <a href="/"><div className="back_button"><FiArrowLeft /></div></a>
        <div className="zoom_button"><FiZoomIn /></div>
    </div>
  )
}

export default DetailProductPageHeader
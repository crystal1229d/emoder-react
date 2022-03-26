import React from 'react'
import ImageSlider from '../../utils/ImageSlider'
import { banners } from '../../../data/Banner'

function Banner() {
    return (
        <div className="banner">
            <ImageSlider images={banners} />
        </div>
    )
}

export default Banner

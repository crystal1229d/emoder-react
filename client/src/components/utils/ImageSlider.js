import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay >
                {props.images && props.images.map((image, index) => (
                    <div key={index} className="banner_item">
                        <img className="banner_image" 
                            src={`http://localhost:5000/${image}`} 
                            alt='banner' />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider

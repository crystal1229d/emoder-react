import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Sections/DetailProductPage.css';
import { menu } from '../../../data/Menu'
import ProductImage from './Sections/ProductImage'
import ProductInfo from './Sections/ProductInfo'
import AddToCartButton from './Sections/AddToCartButton'

function DetailProductPage(props) {

    const productId = props.match.params.productId;

    const [Product, setProduct] = useState({})
    const [TotalSum, setTotalSum] = useState(0)

    useEffect(() => {
        // Axios.get(`api/product/products_by_id?id=${productId}&type=single`)
        //     .then(response => {
        //         setProduct(response.data)
        //         console.log(Product)
        //     })
        //     .catch(err => alert(err))

        menu.map(item => {
            if (item.id === productId*1) {
                setProduct(item);
                setTotalSum(item.price);
            }
        })

    }, [])
    

    return (
        <div className="detailProductPage">
            <div>Back</div>
            <ProductImage image={Product.image}/>
            <ProductInfo product={Product} />
            <AddToCartButton totalSum={TotalSum} />
        </div>
    )
}

export default DetailProductPage
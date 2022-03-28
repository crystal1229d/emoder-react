// import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Sections/DetailProductPage.css';
import { menu } from '../../../data/Menu'
import { optionGroup } from '../../../data/OptionGroup'
import { option } from '../../../data/Option'
import ProductImage from './Sections/ProductImage'
import ProductInfo from './Sections/ProductInfo'
import AddToCartButton from './Sections/AddToCartButton'
import DetailProductPageHeader from './Sections/DetailProductPageHeader';

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

        getProducts()

    }, [])

    const getProducts = () => {

        menu.map(item => {
            if (item.id === productId*1) {
                let matchOptionGroup = [];
                let matchOption = [];

                if (item.optionGroup.length > 0) {

                    item.optionGroup.forEach(function(optionGroupId) {
                        optionGroup.map((group) => {
                            if (group.id === optionGroupId) {
                                matchOptionGroup.push(group)
                                matchOption = [];

                                option.map((opt) => {
                                    if (opt.group_id === optionGroupId) {
                                        matchOption.push(opt)
                                    }
                                })

                                matchOptionGroup[optionGroupId]['option'] = matchOption

                            }
                        })
                    })

                    item['optionGroup'] = matchOptionGroup
                }

                setProduct(item)
                setTotalSum(item.price)
            }
        })
        
    }

    return ( 
        <div className="detailProductPage">
            <DetailProductPageHeader />
            <ProductImage image={Product.image}/>
            <ProductInfo product={Product} />
            <AddToCartButton totalSum={TotalSum} />
        </div>
    )
}

export default DetailProductPage
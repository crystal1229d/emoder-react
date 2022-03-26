import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import ShopName from '../ShopName/ShopName';
import Product from '../Product/Product';
import { menu } from '../../../data/Menu'
import { category } from '../../../data/Category'
import './LandingPage.css';

function LandingPage() {

    const [selectedCategory, setselectedCategory] = useState(0)

    const selectCategory = (id) => {
        setselectedCategory(id)
    }

    return (
        <>
            <ShopName />
            <Banner />
            <Category handleCategory={selectCategory} category={category} />
            <Product selectedCategory={selectedCategory} menu={menu} />
            <NavBar selectedTab={0} />
        </>
    )
}

export default LandingPage

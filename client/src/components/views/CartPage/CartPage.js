import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import './CartPage.css'

function CartPage() {
    const renderHeader = () => {
        return (
            <div>
                <div><AiOutlineShoppingCart /></div>
                <div>CartPage</div>
            </div>
        )
    }

    return (
        <div>
            <Header selectedTab={0} renderHeader={renderHeader}/>
            CartPage Content
            <NavBar selectedTab={1} />
        </div>
    )
}

export default CartPage

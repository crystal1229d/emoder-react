import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFileText, AiOutlineShoppingCart } from 'react-icons/ai';
import './Sections/Navbar.css';

function NavBar(props) {
  const [Selected, setSelected] = useState(props.selectedTab)

  const selectTab = (id) => {
    if (Selected === id) return; 
    setSelected(id)
  };

  return (
    <nav className="menu" style={{ position: 'sticky', zIndex: 5 }}>
      <div className="menu__container">

        <a href="/">
          <div className={`menu__item ${Selected===0 ? 'tab_selected' : 'tab_default'}`} onClick={() => selectTab(0)} value={0}>
              <AiOutlineHome className="menu__item_icon" />
              Main
          </div>
        </a>

        <a href="mypage">
          <div className={`menu__item ${Selected===1 ? 'tab_selected' : 'tab_default'}`} onClick={() => selectTab(1)} value={1}>
            <AiOutlineUser className="menu__item_icon" />
            My page
          </div>
        </a>

        <a href="orderlist">
          <div className={`menu__item ${Selected===2 ? 'tab_selected' : 'tab_default'}`} onClick={() => selectTab(2)} value={2}>
            <AiOutlineFileText className="menu__item_icon" />
            Order List
          </div>
        </a>

        <a href="/cart">
          <div className={`menu__item ${Selected===3 ? 'tab_selected' : 'tab_default'}`} onClick={() => selectTab(3)} value={3}>
            <AiOutlineShoppingCart className="menu__item_icon" />
            Cart
          </div>
        </a>

      </div>
    </nav>
  )
}

export default NavBar
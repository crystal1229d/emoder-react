import React from 'react'

function Header(props) {
    // props 로 selectedTab 값을 받아서 처리 ? 
    // selectedTab = 0 인 경우 => <ShopName /><Banner />
    // selectedTab = 1 인 경우 => <MypageHeader />
    // selectedTab = 2 인 경우 => <OrderListHeader />
    // selectedTab = 3 인 경우 => <CartHeader />

    // 그런데 selectedTab 받는 것은 추후에 사용할 수도 있으니 괜찮은데, 굳이 여기에서 처리하지않고
    // props 로 render 함수를 받아서 처리하자. 

    return (
        <div>
            {props.renderHeader()}
        </div>
    )
}

export default Header

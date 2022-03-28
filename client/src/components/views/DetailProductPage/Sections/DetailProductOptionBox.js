import React from 'react'

function DetailProductOptionBox(props) {

    console.log('DetailProductOptionBox', props)

    const renderOptions = props.optionGroup.option && props.optionGroup.option.length > 0 && props.optionGroup.option.map((optionItem, index) => {

        return (
            <div key={index} className="option-wrapper">
                <div className="selector"><input type="radio" /></div>
                <div className="name">{optionItem.name}</div>
                <div className="price">+{optionItem.price}원</div>
            </div>
        )
    })

    return (
        <div className="detailProductOptionBox">
            <div className="optiongroup_title">{props.optionGroup.name}</div>
            {renderOptions}
        </div>
      )
}

export default DetailProductOptionBox
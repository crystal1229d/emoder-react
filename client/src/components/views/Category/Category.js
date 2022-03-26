import React, { useState } from 'react'
import './Category.css';

function Category(props) {

    const [SelectedCategory, setSelectedCategory] = useState(0);

    const onClickCategory = (id) => {
        if (SelectedCategory === id) return
        setSelectedCategory(id)
        props.handleCategory(id)
    }
    
    const renderCategory = props.category.map((item) => {
        return (
            <div 
                key={item.id} 
                onClick={() => onClickCategory(item.id)} 
                className={"category_item " + (SelectedCategory === item.id ? "selected" : "default")}>
                {item.name}
            </div>
        )
    })

    return (
        <div className="category">
            { props.category && renderCategory }
        </div>
    )
}

export default Category

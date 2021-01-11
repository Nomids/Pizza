import React from 'react'
import Card from './Card.jsx'
import "./CatalogBlock.scss"

const CatalogBlock = ({itemData}) => {

    const renderItem = () => {
        return itemData.map((item) => {
            return (
                <Card {...item}/>
            )
        })
    }

    return (
        <div className="catalog-block">
            {renderItem()}
        </div>
    )
}

export default CatalogBlock

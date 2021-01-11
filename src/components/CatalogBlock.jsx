import React from 'react'
import Card from './Card.jsx'
import "./CatalogBlock.scss"

const CatalogBlock = ({itemData}) => {

    const renderItem = () => {
        return itemData.map((item, id) => {
            return (
                <Card key={id} {...item}/>
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

import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const ProductsCard = ({ image, title, id }) => {
    return (
        <div className='product-card'>
            <img src={image} alt={title} />
            <div className="product-card__description">
                <p>{title}</p>
                <Link to={`/products/${id}`}>
                    <button>Comprar Look</button>
                </Link>
            </div>
        </div >
    )
}

export default ProductsCard
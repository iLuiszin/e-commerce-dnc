import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'


const ProductDetail = ({ product }) => {


    return (
        <section className='product-detail'>
            <div className='product-detail__left'>
                <div className='product-detail__card'>
                    <img src={product.imgPathDetail} alt={product.title} />
                    <p>{product.title}</p>
                </div>

                <div className='product-detail__description'>
                    <h1>Descrição</h1>
                    <p>{product.title}</p>
                </div>
            </div>
            <div className='product-detail__right'>
                <h1>Informações sobre o produto</h1>
                <h2>{product.price}</h2>

                <div className="product-detail__cube-colors">
                    <p>
                        Cor: {""}
                        {product.colors.length === 1 ? product.colors.map((color, index) => (
                            <span key={index}>{color}</span>
                        )) : product.colors.map((color, index) => index + 1 === product.colors.length ? (
                            <span key={index}>{color}</span>
                        ) : (
                            <span key={index}>{color}, </span>
                        )
                        )
                        }
                    </p>
                    <div className="product-detail__cube-color">
                        {
                            product.colors.map((color, index) => (
                                <div key={index} style={{ width: '64px', height: '60px', background: color, borderRadius: '10px', border: '1px solid #b7b7b7', cursor: 'pointer' }}>

                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="product-detail__sizes-div">
                    <p>Tamanho:</p>
                    <div className="product-detail__sizes">
                        {
                            product.sizes.map((size, index) => (
                                <span key={index} style={{
                                    width: "55px",
                                    height: "58px",
                                    borderRadius: "10px",
                                    border: "1px solid black",
                                    padding: "20px 0px 20px 0",
                                    textTransform: "uppercase",
                                    textAlign: "center",
                                    cursor: 'pointer'
                                }}>
                                    {size}
                                </span>
                            ))
                        }
                    </div>
                </div>

                <Link to={`/pay/${product.id}`}>
                    <button>Finalizar Compra</button>
                </Link>
            </div>
        </section>
    )
}

export default ProductDetail
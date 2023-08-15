import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import Search from '../../components/Search/Search'
import { PRODUCTS_MOCK } from '../../mock/products.mock'
import './index.scss'

const Products = ({ data }) => {
    const { productId } = useParams();
    const selectedProduct = data.find((product) => product.id == productId);
    return (
        <section>
            <HeaderMenu />
            <Search />
            <ProductDetail product={selectedProduct} />
        </section>
    )
}

export default Products
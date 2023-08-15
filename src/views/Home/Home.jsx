import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import Search from '../../components/Search/Search'
import './index.scss'


function Home({ data }) {
    console.log(data)
    return (
        <div className='home'>
            <HeaderMenu />
            <Search />
            <div className="home__products">
                {data.map((product) => (
                    <ProductsCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.imgPath}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home


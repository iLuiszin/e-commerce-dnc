import search from '../../assets/search.png'
import profile from '../../assets/profile.png'
import heart from '../../assets/heart.png'
import './index.scss'

const Search = () => {
    return (
        <div className='search'>
            <div className="search__input-container">
                <img src={search} alt="icone de pesquisa" className='search__search-logo' />
                <input type="text" placeholder='O que você está procurando?' />
            </div>
            <img src={profile} alt="ícone perfil" />
            <img src={heart} alt="ícone coração" />
        </div>
    )
}

export default Search
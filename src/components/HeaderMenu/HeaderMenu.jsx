import './index.scss'
import logoDnc from '../../assets/logo-dnc.png'
import cartShop from '../../assets/cartshop.png'

const HeaderMenu = () => {
    return (
        <header className='header-menu'>
            <img src={logoDnc} alt="Logo DNC" className='header-menu__logo' />
            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>
            <div className='header-menu__cart-shop'>
                <h1>Meu Carrinho</h1>
                <img src={cartShop} alt="Ícone carrinho de super-mercado" />
            </div>
        </header>
    )
}

export default HeaderMenu
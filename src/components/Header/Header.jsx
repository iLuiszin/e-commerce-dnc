import dncLogo from '../../assets/logo-dnc.png'
import './index.scss'

const Header = () => {
    return (
        <header className='header'>
            <img src={dncLogo} alt="Logo DNC" />
        </header>
    )
}

export default Header
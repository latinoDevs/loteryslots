import './_style.scss'
import logo from '../../svg/logo.png'
export const Header = () => {
    return ( 
        <header>
            <img src={logo} alt="logo"/>
        </header>
    )
}
 
export default Header;
import logo from '../images/logo.svg'
import Button from './Button'

const Header = () => {

    return (
        <nav>
            <img className='logo left' src={logo} alt="Logo"></img>
            <Button 
                text='DECK'
                className='right' />
        </nav>
    )
}

export default Header

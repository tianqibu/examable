  
import logo from '../images/logo.svg'
import Button from './Button'

const Header = () => {
    return (
        <nav class="navBar">
            <img className='logo left' src={logo} alt="Logo"></img>
            
            <div>
            <Button text= "Home" className="right" /> 
            <Button text= "Deck" className="right" /> 
            <Button text= "Study Now" className="right" />
            </div>
        </nav>
    )
}

export default Header
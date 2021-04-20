  
import logo from '../images/logo.svg'
import Button from './Button'

const Header = () => {
    return (
        <nav className="navBar">
            <img className='logo left' src={logo} alt="Examable Logo"></img>
            <div>
                <Button className='navButton' text= "Home" className="right" /> 
                <Button className='navButton' text= "Deck" className="right" /> 
                <Button className='navButton' text= "Study Now" className="right" />
            </div>
        </nav>
    )
}

export default Header
  
import logo from '../images/logo.svg'
import Button from './Button'

const Header = () => {
    return (
        <nav className="navBar">
            <img className='logo left' src={logo} alt="Examable Logo"></img>
            <div>
                <Button 
                    buttonStyle="btn--white" 
                    text= "Home" 
                    className="right" 
                /> 
                <Button 
                    buttonStyle="btn--white" 
                    text= "Deck" 
                    className="right" 
                /> 
                <Button 
                    buttonStyle="btn--white" 
                    text= "Study Now" 
                    className="right" 
                /> 
            </div>
        </nav>
    )
}

export default Header
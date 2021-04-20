  
import logo from '../images/logo.svg'
import Button from './Button'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navBar">
            <Link to='/'><img className='logo left' src={logo} alt="Examable Logo"></img></Link>
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
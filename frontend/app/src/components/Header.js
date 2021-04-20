  
import logo from '../images/logo.svg'
import Button from './Button'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navBar">
            <Link to='/'><img className='logo left' src={logo} alt="Examable Logo"></img></Link>
            <div>
                <Link to='/'>
                    <Button 
                        buttonStyle="btn--white" 
                        text= "Home" 
                        className="right" 
                    /> 
                </Link>
                <Link to='/deck'>
                    <Button 
                        buttonStyle="btn--white" 
                        text= "Deck" 
                        className="right" 
                    /> 
                </Link> 
                <Link to='/study-now'>   
                    <Button 
                        buttonStyle="btn--white" 
                        text= "Study Now" 
                        className="right" 
                    /> 
                </Link>  
            </div>
        </nav>
    )
}

export default Header
import logo from '../images/logo.svg'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <Navbar>
            <img className='logo left' src={logo} alt="Logo"></img>
            <Button variant="testing123">Home</Button> 
            <Button variant="white">Deck</Button> 
            <Button variant="white">Study Now</Button>
        </Navbar>
    )
}

export default Header

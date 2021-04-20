import logo from '../images/logo.svg'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
<>
    <style type="text/css">
        {`
        .btn-flat {
        background-color: purple;
        color: white;
        }

        .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        }
        `}
    </style>
    <Button variant="flat">Home</Button> 
</>
const Header = () => {
    return (
        <Navbar>
            <img className='logo left' src={logo} alt="Logo"></img>
            <Button variant="testing123">Home</Button> 
            <Button variant="white">Deck</Button> 
            <Button variant="white">Study Now</Button>
        <>
            <style type="text/css">
                {`
                .btn-flat {
                background-color: #FFFFFF;
                color: #435058;
                padding: 1.5 1.5rem;
                }

                .btn-xxl {
                font-size: 1rem;
                }
                `}
            </style>
        </>
        </Navbar>
    )
}

export default Header

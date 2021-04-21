import Button from './Button'

const Header = () => {
    return (
        <nav className="navBar">
            <img className='logo left' src={logo} alt="Examable Logo"></img>
            <div>
                <Button text= "Home" className="right" /> 
                <Button text= "Deck" className="right" /> 
                <Button text= "Study Now" className="right" />
            </div>
        </nav>
    )
}

export default Header
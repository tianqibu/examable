import logo from '../images/logo.svg'
import Button from './Button'
import Placeholder from '../images/NoteImage_Square.svg'
import Image from '../images/launch.jpeg'
import { Link } from 'react-router-dom'

const Launch = () => {
    return (
        <div className="launchContainer">
            <div className="child">
            <img className="placeholder" src={Image} alt='A note with question "want to learn faster" written on it'></img>
            </div>
            <div className="child">
                <div className="textContainer">
                    <div className="launchHeading"><img className="launchLogo" src={logo} alt='Examable Logo'></img><h2 className="subtitle">has launched</h2></div>
                    <p className="launchParagraph">Examable is now up and running. Create some flashcards and become more than able for your exams today!</p>
                    <Link to='/deck'><Button buttonStyle="btn--charcoal" text="Get started now"/></Link>
                </div>
            </div>    
        </div>
    )
}

export default Launch

import logo from '../images/logo.svg'
import Button from './Button'
import Placeholder from '../images/NoteImage_Square.svg'
import { Link } from 'react-router-dom'

const Launch = () => {
    return (
        <div className="launchContainer">
            <div className="child">
            <img className="placeholder" src={Placeholder} alt=''></img>
            </div>
            <div className="child">
                <div className="textContainer">
                    <div className="launchHeading"><img className="launchLogo" src={logo} alt=''></img><h1 className="subtitle">has launched</h1></div>
                    <p className="launchParagraph">Examable is now up and running. Create some flashcards and become more than able for your exams today!</p>
                    <Link to='/deck'><Button buttonStyle="btn--charcoal" text="Get started now"/></Link>
                </div>
            </div>    
        </div>
    )
}

export default Launch

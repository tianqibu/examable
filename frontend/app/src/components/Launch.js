import logo from '../images/logo.svg'
import Button from './Button'
import Placeholder from '../images/NoteImage_Square.svg'

const Launch = () => {
    return (
        <div className="launchContainer">
            <div className="child">
            <img className="placeholder" src={Placeholder} alt=''></img>
            </div>
            <div className="child">
                <div className="textContainer">
                    <img className="launchLogo" src={logo} alt=''></img>
                    <h1 className="launchHeading">has launched</h1>
                    <p className="launchParagraph">examable is now up and running. Create some flashcards and become more than able for your exams today!</p>
                    <Button buttonStyle="btn--charcoal" text="Get started now"/>
                </div>
            </div>    
        </div>
    )
}

export default Launch

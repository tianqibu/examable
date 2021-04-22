import Button from './Button'
import image from '../images/NoteImage_Square.svg'
import { Link } from 'react-router-dom'
import { scrollToTop } from './Utils'
const Article = () => {
    return (
        <div className="mainArticle">
            <div className='articleBody'>
                <h1>Improve your memory using spaced retrieval</h1>
                <p className='articleText'>Optimise your revision by repeating difficult concepts in the perfect interval for maximum memory retention.</p>
                <Link to='/deck'><Button 
                    buttonStyle="btn--charcoal" 
                    text="Create a deck"
                    event={scrollToTop}
                /></Link>
            </div>    
            <img className='articleImage right' src={image} alt="A note with the question 'Want to learn faster?' written on it"></img>
        </div>
    )
}

export default Article
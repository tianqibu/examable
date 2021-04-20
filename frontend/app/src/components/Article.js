import Button from './Button'
import image from '../images/NoteImage_Square.svg'

const Article = () => {
    return (
        <article className='mainArticle'>
            <div className='articleBody'>
                <h1>Improve your memory using spaced retrieval</h1>
                <p className='articleText'>Optimise your revision by repeating difficult concepts in the perfect interval for maximum memory retention.</p>
                <Button text="Create a deck" className="blueButton"/>
            </div>
            <img className='articleImage right' src={image} alt="A note with the question 'Want to learn faster?' written on it"></img>
        </article>
    )
}

export default Article
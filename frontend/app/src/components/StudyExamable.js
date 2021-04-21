import PropTypes from 'prop-types'
import './button.css'
import Button from './Button'
import './StudyExamable.css'
import { useEffect, useState } from 'react'

 
const StudyExamable = ( { question } ) => {
    const [examable, setExamable] = useState([])
    // const handleclick = () => 

    // Fetch next card
    const fetchNextCard = async () => {
        const res = await fetch('http://localhost:8000/api/spacedRetrievals/nextCard')
        const data = await res.json()
        return data
    }
    useEffect(() => {
        const getExamable = async () => {
            const nextCard = await fetchNextCard()
            setExamable(nextCard)
        }
        getExamable()
    }, [])

        
    return (
        <div className="SE-Container">
            <div className="SE-Question-Container">
                <p>{ examable.question }</p>
            </div>

            <div>
                <Button 
                    className="revealButton"
                    buttonStyle="btn--charcoal" 
                    text="Reveal Answer"
                />
            </div>
        </div>
    )
}

StudyExamable.defaultProps = {
    question: 'This is a question',
}
StudyExamable.propTypes = { 
    question: PropTypes.string
}
export default StudyExamable

import PropTypes from 'prop-types'
import './button.css'
import Button from './Button'
import './StudyExamable.css'
import { useEffect, useState } from 'react'

 
const StudyExamable = () => {
    const [Examable, setExamable] = useState([])
    const [Revealed, setRevealed] = useState(false)
    const RevealAnswer = () => {
        setRevealed(!Revealed)
    }
    const WrongAnswer = () => {
        setRevealed(!Revealed)
        toggleLatestAttemptFalse()
        getExamable()
    }
    const CorrectAnswer = () => {
        setRevealed(!Revealed)
        toggleLatestAttemptTrue()
    }
    // Fetch next card
    const fetchNextCard = async () => {
        const res = await fetch('http://localhost:8000/api/spacedRetrievals/nextCard')
        const data = await res.json()
        return data
    }
    // Fetch card after first answer
    const getExamable = async () => {
        const nextCard = await fetchNextCard()
        setExamable(nextCard)
    }
    // Toggle cards latestAttemptCorrect value to true and gets next card for UI
    const toggleLatestAttemptTrue = async () => {
        const toggleTrue = { ...Examable, latestAttemptCorrect: true }
        // console.log(examable, toggleTrue)
        await fetch(`http://localhost:8000/api/spacedRetrievals/${Examable._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(toggleTrue),
        })
        getExamable()
    }

    // Toggle cards latestAttemptCorrect value to false and gets next card for UI
    const toggleLatestAttemptFalse = async () => {
        const toggleFalse = { ...Examable, latestAttemptCorrect: false }
        // console.log(examable, toggleTrue)
        await fetch(`http://localhost:8000/api/spacedRetrievals/${Examable._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(toggleFalse),
        })
        getExamable()
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
            <div className="SE-Question-Container SE-Card-Large">
                <p>{ Examable.question }</p>
            </div>

            <div className="SE-StateDependent">
                {Revealed ? 
                    <>
                        <div className="SE-Answer-Container SE-Card-Small">
                            <p>{ Examable.answer }</p>
                        </div>
                        <div className="SE-Button-Container SE-Card-Small">
                            <Button event={WrongAnswer}></Button><Button event={CorrectAnswer}></Button>
                        </div>
                    </>
                    :
                    <div className="SE-Card-Small">
                        <Button 
                            className="SE-Button"
                            buttonStyle="btn--charcoal" 
                            text="Reveal Answer"
                            event={RevealAnswer}
                        
                        />
                    </div>
                }
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

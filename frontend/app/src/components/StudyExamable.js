import PropTypes from 'prop-types'
import './button.css'
import './StudyExamable.css'
import { useEffect, useState } from 'react'
import useWindowSize from "@rooks/use-window-size"
import Button from './Button'
import Icon from './Icon'
import Confetti from 'confetti-react';
 
const StudyExamable = () => {
    const [Examable, setExamable] = useState([])
    const [Revealed, setRevealed] = useState(false)
    const [ConfettiExists, setConfettiExists] = useState(false)
    const { width, height } = useWindowSize();
    const recycle = false;
    const RevealAnswer = () => {
        setRevealed(!Revealed)
    }
    const WrongAnswer = () => {
        setRevealed(!Revealed)
        toggleLatestAttemptFalse()
    }
    const CorrectAnswer = () => {
        setConfettiExists(!ConfettiExists)
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
        <>
        {!Examable ? 
            <p className="SE-No-Examable-Text">You've finished studying all of your Examables for now! Check back later.</p>
            :
            <div className="SE-Container">
                <div className="SE-Question-Container SE-Card-Large">
                    {ConfettiExists ? 
                    <div>
                    <Confetti width={width} height={height} recycle={recycle}/>
                    <p>{ Examable.question }</p>
                    </div>
                    : 
                    <p>{ Examable.question }</p>
                }
                </div>

                <div className="SE-StateDependent">
                    {Revealed ? 
                        <>
                            <div className="SE-Answer-Container SE-Card-Small">
                                <p>{ Examable.answer }</p>
                            </div>
                            <div className="SE-Button-Container SE-Card-Small">
                                <Icon
                                icon="cross"
                                event={WrongAnswer}>
                                </Icon>
                                <Icon
                                icon="tick"
                                event={CorrectAnswer}>
                                </Icon>
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
            }
        </>
    )
}

StudyExamable.defaultProps = {
    question: 'This is a question',
}
StudyExamable.propTypes = { 
    question: PropTypes.string
}
export default StudyExamable

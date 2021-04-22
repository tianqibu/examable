import './button.css'
import './StudyExamable.css'
import { useEffect, useState } from 'react'
import useWindowSize from "@rooks/use-window-size"
import Button from './Button'
import Icon from './Icon'
import Confetti from 'confetti-react';
import { fetchNextCard } from './Utils'
 
const StudyExamable = () => {
    const [Examable, setExamable] = useState([])
    const [Revealed, setRevealed] = useState(false)
    const { width, height } = useWindowSize();
    const [recycle, setRecycle] = useState(false)
    const [run, setRun] = useState(false);
    const RevealAnswer = () => {
        setRevealed(!Revealed)
        setRecycle(false)
    }
    const WrongAnswer = () => {
        setRevealed(!Revealed)
        toggleLatestAttemptFalse()
    }
    const CorrectAnswer = () => {
        setRun(true)
        setRecycle(true)
        setTimeout(() => {
            setRecycle(false)
        }, 3000);
        setRevealed(!Revealed)
        toggleLatestAttemptTrue()
    }
    // Fetch card after first answer
    const getExamable = async () => {
        const nextCard = await fetchNextCard()
        setExamable(nextCard)
    }
    // Toggle cards latestAttemptCorrect value to true and gets next card for UI
    const toggleLatestAttemptTrue = async () => {
        const toggleTrue = { ...Examable, latestAttemptCorrect: true }
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
         
            <p className="SE-No-Examable-Text SE-Question-Container Shadow SE-Card-Large">You've finished studying all of your Examables for now! Check back later.</p>
            :
            <div className="SE-Container">
                <div className="SE-Question-Container SE-Card-Large Shadow">
                    <Confetti width={width} height={height} recycle={recycle} run={run}/>
                    <p>{ Examable.question }</p>
                </div>

                <div className="SE-StateDependent">
                    {Revealed ? 
                        <>
                            <div className="SE-Answer-Container SE-Card-Small Shadow">
                                <p>{ Examable.answer }</p>
                            </div>
                            <div className="SE-Button-Container SE-Card-Small">
                                <Icon
                                icon="cross"
                                event={WrongAnswer}
                                margin={"0 4rem"}>
                                </Icon>
                                <Icon
                                icon="tick"
                                event={CorrectAnswer}
                                margin={"0 4rem"}>
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

export default StudyExamable

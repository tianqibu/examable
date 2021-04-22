import './button.css'
import './StudyExamable.css'
import { useEffect, useState } from 'react'
import useWindowSize from "@rooks/use-window-size"
import Button from './Button'
import Icon from './Icon'
import Confetti from 'confetti-react';
import { fetchNextCard } from './Utils'
 
const StudyExamable = () => {

    // States required for Examables to render / ternary operator for which screen is rendered / confetti
    const [Examable, setExamable] = useState([])
    const [Revealed, setRevealed] = useState(false)
    const { width, height } = useWindowSize();
    const [recycle, setRecycle] = useState(false)
    const [run, setRun] = useState(false);

    // Functions that execute on button / icon clicks.
    const RevealAnswer = () => {
        setRevealed(!Revealed)
        setRecycle(false)
    }
    const WrongAnswer = () => {
        setRevealed(!Revealed)
        toggleLatestAttempt(false)
    }
    const CorrectAnswer = () => {
        setRun(true)
        setRecycle(true)
        setTimeout(() => {
            setRecycle(false)
        }, 3000);
        setRevealed(!Revealed)
        toggleLatestAttempt(true)
    }

    // Fetch card after first answer
    const getExamable = async () => {
        const nextCard = await fetchNextCard()
        setExamable(nextCard)
    }

    // Toggle cards latestAttemptCorrect value to true / false based on what is passed through and gets next card for UI
    const toggleLatestAttempt = async function(bool) {
        const toggleBool = { ...Examable, latestAttemptCorrect: bool}
        await fetch(`http://localhost:8000/api/spacedRetrievals/${Examable._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(toggleBool),
        })
        getExamable()
    }
    
    // Gets Examable via next spaced retrieval route on page render
    useEffect(() => {
        const getExamable = async () => {
            const nextCard = await fetchNextCard()
            setExamable(nextCard)
        }
        getExamable()
    }, [])
        
    return (
        // If no Examable to render, renders card stating user is finished. Else renders Examable with icons for responsive interface.
        <> 
        {!Examable ? 
            <>
                
                <p className="SE-No-Examable-Text SE-Question-Container Shadow SE-Card-Large">
                <Confetti width={width} height={height} recycle={true} run={true} numberOfPieces={40}/>
                    Great job! <br/><br/> You've finished studying all of your Examables for now! <br/><br/> Check back later.
                </p>
            </>
            :
            <div className="SE-Container">
                <div className="SE-Question-Container SE-Card-Large Shadow">
                    <Confetti width={width} height={height} recycle={recycle} run={run}/>
                    <p>{ Examable.question }</p>
                </div>
                {/* 
                Revealed state changes upon reveal answer button press. If Revealed = true, Examable answer renders. Else only the button renders.
                */}
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

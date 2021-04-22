import Button from './Button'

const AddCard = ({ 
    onSubmit, 
    onQuestionChange, 
    onAnswerChange, 
    question, 
    answer,
    placeholder
}) => {

    return (
        <div className="add-container">
            <form onSubmit={onSubmit}>
                <div className="cards-container">
                    <div className="question-container">
                        <label> Question
                            <input 
                                className="cardFront add" 
                                type="text" required
                                onChange={(e) => onQuestionChange(e.target.value)}
                                name="question"
                                autocomplete="off" 
                                placeholder={placeholder}
                                defaultValue={question}/>
                        </label>
                    </div>
                    <div className="answer-container">
                    <label> Answer
                        <input 
                            className="cardBack add" 
                            type="text" required
                            onChange={(e) => onAnswerChange(e.target.value)}
                            name="answer"
                            autocomplete="off" 
                            placeholder={placeholder}
                            defaultValue={answer}/>
                        </label><br></br>
                    </div>
                </div>
                <div className="btn--center">
                    <Button buttonSize="btn--large" input type="submit" value="Submit" text="Submit" />
                </div>
            </form>
        </div> 
    )
}

export default AddCard

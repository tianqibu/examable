import Button from './Button'

const AddCard = ({ 
    onSubmit, 
    onQuestionChange, 
    onAnswerChange, 
    question, 
    answer 
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
                        defaultValue={question}/>
                </label>
                </div>
                <div className="answer-container">
                <label> Answers
                    <input 
                        className="cardBack add" 
                        type="text" required
                        onChange={(e) => onAnswerChange(e.target.value)}
                        name="answer" 
                        defaultValue={answer}/>
                </label><br></br>
                </div>
                </div>
                <Button input type="submit" value="Submit" text="Submit" />
            </form>
        </div> 
    )
}

export default AddCard

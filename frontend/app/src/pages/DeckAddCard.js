import Title from '../components/Title'
import AddCard from '../components/AddCard'
import Button from '../components/Button'

import { Link } from 'react-router-dom'


const DeckAddCard = ({addCard, onQuestionChange, onAnswerChange}) => {
    return (
        <div>
              
            <Title title="Add An Examable" />
            <AddCard
            onSubmit={addCard}
            onQuestionChange={onQuestionChange}
            onAnswerChange={onAnswerChange}
            placeholder="Type here..."
            />
            <div className="btn--center">
                <Link to="/deck">
                <Button 
                    text="My examables" 
                    buttonStyle="btn--blue" 
                    buttonSize="btn--large"
                />
                </Link>
            </div>
            <div className="spacer"></div>
        
        </div>
    )
}

export default DeckAddCard

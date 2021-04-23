import Title from '../components/Title'
import AddCard from '../components/AddCard'
import Button from '../components/Button'

import { Link } from 'react-router-dom'

const DeckUpdateCard = ({ ID, question, answer, onQuestionChange, onAnswerChange, updateCard}) => {
    return (
        <div>
            
              <Title title="Update An Examable" />
              <AddCard 
                ID={ID}
                question={question}
                answer={answer}
                onQuestionChange={onQuestionChange}
                onAnswerChange={onAnswerChange}
                onSubmit={updateCard}
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

export default DeckUpdateCard

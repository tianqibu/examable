import Title from '../components/Title'
import Button from '../components/Button'
import DeckCardList from '../components/DeckCardList'
import { Link } from 'react-router-dom'

const Deck = ({allCards, onDelete, onUpdate }) => {
    return (
        <div>
            <Title title="My Examables" />
              <div className="btn--center">
                <Link to="/deck/add-card">
                  <Button 
                      buttonSize="btn--large" 
                      text="Add new examable" />
                </Link>
              </div>
              <DeckCardList 
                allCards={allCards} 
                onDelete={onDelete} 
                onUpdate={onUpdate}
                />
        </div>
    )
}

export default Deck

import DeckCardListItem from './DeckCardListItem'

const DeckCardList = ({ allCards, onDelete, onUpdate }) => {

    return (        
        <div className="cardList">
            { allCards.length > 0 
                ? (allCards.map(card => (
                <DeckCardListItem key={card._id} id={card._id} onUpdate={onUpdate} onDelete={onDelete} question={card.question} answer={card.answer}/>
                ))) 
                : ('No cards to show') }
        </div>
    
    )
}

export default DeckCardList

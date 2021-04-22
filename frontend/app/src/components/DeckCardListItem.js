import { scrollToTop } from './Utils'
import Icon from './Icon'

import { Link } from 'react-router-dom'

const DeckCardListItem = ({ id, question, answer, onDelete, onUpdate }) => {

    return (
        <div className="cardListItem">
            <div className="iconBallast"></div>
            <div className="cardFront">
                <p>{ question }</p>
            </div>
            <div className="cardBack">
                <p>{ answer }</p>
            </div>
            <div className="cardListButtons">
                <Link to='/deck/update-card'>
                    <Icon className="deckIcon"
                        icon="edit"
                        event={
                            () => {
                                onUpdate({id, question, answer })
                                scrollToTop();
                        }}>
                    </Icon>
                </Link>
                    <Icon className="deckIcon"
                        icon="delete"
                        event={()=>onDelete({id})}>
                    </Icon>          
            </div>
        </div>
    )
}

DeckCardListItem.defaultProps = {
    question: 'Question?',
    answer: 'Answer'
}

export default DeckCardListItem
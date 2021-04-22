import Icon_Edit from '../images/Icon_Edit.svg'
import Icon_Delete from '../images/Icon_Delete.svg'

import { Link } from 'react-router-dom'

const DeckCardListItem = ({ id, question, answer, onDelete, onUpdate }) => {

    return (
        <div className="cardListItem">
            <div className="cardFront">
                <p>{ question }</p>
            </div>
            <div className="cardBack">
                <p>{ answer }</p>
            </div>
            <div className="cardListButtons">
                <Link className="iconButtons" to='/deck/update-card'><img src={Icon_Edit} alt="Edit button" onClick={() => onUpdate({id, question, answer })}></img></Link>
                <img  src={Icon_Delete} alt="Delete button" onClick={()=>onDelete({id})}></img>
            </div>
        </div>
    )
}

DeckCardListItem.defaultProps = {
    question: 'Question?',
    answer: 'Answer'
}

export default DeckCardListItem
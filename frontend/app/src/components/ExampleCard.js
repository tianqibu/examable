import PropTypes from 'prop-types';

const ExampleCard = ({ question, answer}) => {
    return (
        <div className="exampleCard">
            <div className="questionHalf">
                <p>{ question }</p>
            </div>
            <div className="answerHalf">
                <p>{ answer }</p>
            </div>
            
        </div>
    )
}

// Defaults for example card
ExampleCard.defaultProps = {
    question: 'Question?',
    answer: 'Answer'
}

ExampleCard.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}

export default ExampleCard

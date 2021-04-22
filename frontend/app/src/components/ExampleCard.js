import PropTypes from 'prop-types';

const ExampleCard = ({ question, answer }) => {
    return (
        <div className="exampleCard">
            <div className="questionHalf">
                <h3>{ question }</h3>
            </div>
            <div className="answerHalf">
                <h3>{ answer }</h3>
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

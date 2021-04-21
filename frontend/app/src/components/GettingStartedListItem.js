import PropTypes from 'prop-types'

const GettingStartedListItem = (props) => {
    return (
            <div className="GSL-Item">
                <img className="GSL-Item-Image" 
                alt="Image of the current item" 
                src={ props.src }>
                </img>
                <h3 className="GSL-Heading">{ props.heading }</h3>
                <p className="GSL-Text">{ props.description }</p>
            </div>
    )
}

// Defaults for example card
GettingStartedListItem.defaultProps = {
    src: './../images/GSL_StartStudying.svg',
    heading: 'Default Header',
    description: 'Default Description'
}

GettingStartedListItem.propTypes = {
    src: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string
}

export default GettingStartedListItem

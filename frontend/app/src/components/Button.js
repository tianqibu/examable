import PropTypes from 'prop-types'
import './button.css'

const STYLES = [
    "btn--blue",
    "btn--charcoal",
    "btn--white",
    "btn--yellow",
    "btn--red",
    "btn--green"
]

const SIZES = [
    "btn--medium",
    "btn--small"
]

const Button = ({ 
    buttonStyle,
    buttonSize,
    text
    }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[1]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
    >{ text }</button>
}

// Prop validation
Button.propTypes = {
    text: PropTypes.string
}

export default Button 
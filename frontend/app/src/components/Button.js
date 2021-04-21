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

const POSITIONS = [
    "btn--center"
]

const Button = ({ 
    buttonStyle,
    buttonSize,
    buttonPosition,
    text,
    onClick
    }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[1]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return <div><button onClick={onClick}
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
        >{ text }</button></div>
    
}

// Prop validation
Button.propTypes = {
    text: PropTypes.string
}

export default Button 
import PropTypes from 'prop-types'

const Button = ({ backgroundColor, text }) => {
    return <button style={{ backgroundColor: backgroundColor }} 
    className='btn'>{ text }</button>
}

// // Defaults for button
// Button.defaultProps = {
//     backgroundColor: '#FFF'
// }

// Prop validation
Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default Button 
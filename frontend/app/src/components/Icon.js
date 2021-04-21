import PropTypes from 'prop-types'
import './icon.css'
import cross from './../images/Icon_Cross.svg'
import tick from './../images/Icon_Tick.svg'

const Icon = ({ 
    icon,
    event
    }) => {
    
    const ICONS = {
        "cross" : cross,
        "tick" : tick
    }

    return <button 
            onClick={event}
            className={`icon`}>
                <img className='icon_image' src={ICONS[icon]} alt={icon}></img>
            </button>
}

// Prop validation
Icon.propTypes = {
    text: PropTypes.string
}

export default Icon 
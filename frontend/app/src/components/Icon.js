import PropTypes from 'prop-types'
import './icon.css'
import cross from './../images/Icon_Cross.svg'
import tick from './../images/Icon_Tick.svg'
import del from './../images/Icon_Delete.svg'
import edit from './../images/Icon_Edit.svg'

const Icon = ({ 
    icon,
    event,
    margin
    }) => {
    
    const ICONS = {
        "cross" : cross,
        "tick" : tick,
        "delete": del,
        "edit": edit
    }

    return <button 
            onClick={event}
            className={`icon`}>
                <img className='icon_image' style={{ margin: margin}} src={ICONS[icon]} alt={icon}></img>
            </button>
}

// Prop validation
Icon.propTypes = {
    text: PropTypes.string
}

// Default props
Icon.defaultProps = {
    margin: '0'
}

export default Icon 
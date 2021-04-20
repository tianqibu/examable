// DO properly using static folder for descriptions.
import CreateADeck from './../images/GSL_CreateADeck.svg'
import StartStudying from './../images/GSL_StartStudying.svg'

import GettingStartedListItem from './GettingStartedListItem'

const GettingStartedList = () => {
    return (
        <div className="GSL-Container">
            <GettingStartedListItem 
            heading = "Create a deck"
            description = "Add your cards quickly and easily. Delete old cards when no longer required."
            src = {CreateADeck}
            />
            <GettingStartedListItem 
            heading = "Start studying"
            description = "Cards will be shown to you less often if you get them correct, helping you prioritise."
            src = {StartStudying}
            />
        </div>
    )
}

export default GettingStartedList

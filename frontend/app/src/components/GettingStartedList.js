// DO properly using static folder for descriptions.
import CreateADeck from './../images/GSL_CreateADeck.svg'
import StartStudying from './../images/GSL_StartStudying.svg'

import GettingStartedListItem from './GettingStartedListItem'

const GettingStartedList = () => {
    return (
        <div className="GSL-Section">
            <h2>Getting Started</h2>
            <div className="GSL-Container">
                <GettingStartedListItem 
                heading = "Create a deck"
                description = "Add your cards quickly and easily. Delete old cards when no longer required."
                src = {CreateADeck}
                alt = {"A pencil"}
                />
                <GettingStartedListItem 
                heading = "Start studying"
                description = "Cards will be shown to you less often if you get them correct, helping you prioritise."
                src = {StartStudying}
                alt={"An open book"}
                />
            </div>
        </div>
    )
}

export default GettingStartedList

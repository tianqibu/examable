import ExampleCard from './ExampleCard'

const ExampleCards = () => {
    return (
        <div className="example-section">
            <h3>Examable Examples</h3>
            <div  className="example-cards">
            <ExampleCard question="What does the fox say?"
                answer="Incoherent Screaming"/>
            <ExampleCard question="What is 1+1?"
                answer="2"/>
            <ExampleCard question="What is the capital city of the UK?"
                answer="London"/>
            </div>    
        </div>
       
    )
}

export default ExampleCards

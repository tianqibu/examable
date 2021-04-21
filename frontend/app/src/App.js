import Header from './components/Header'
import GettingStartedList from './components/GettingStartedList'
import Footer from './components/Footer'
import Launch from './components/Launch'
import Article from './components/Article'
import Title from './components/Title'
import ExampleCards from './components/ExampleCards'
import DeckCardList from './components/DeckCardList'
import Button from './components/Button'
import AddCard from './components/AddCard'

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {

  const [allCards, setAllCards] = useState([])
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')
  const [updateID, setUpdateID] = useState('')
  const [updateQuestion, setUpdateQuestion] = useState('')
  const [updateAnswer, setUpdateAnswer] = useState('')
 
  useEffect(() => {

    // Fetch all cards
    const fetchAllCards = async () => {
    const res = await fetch('http://localhost:8000/api/studycards', {
        method: 'GET',
    })
    const data = await res.json()
    setAllCards([...data])
    return data
    }

    fetchAllCards()
  }, [])

  // Card to be updated
  const cardToBeUpdated = async (details) => {
    console.log(details.id, details.answer, details.question)
    setUpdateID(details.id)
    setUpdateQuestion(details.question)
    setUpdateAnswer(details.answer)
  }

  // Deletes card from API
  const deleteCard = async (card) => {
    console.log("Card deleted")
    const id = card.id
    const res = await fetch(`http://localhost:8000/api/studycards/${id}`, {
      method: 'DELETE',
    })

    res.status === 204
      // Deletes card from UI
      ? setAllCards(allCards.filter((c) => c._id !== card.id))
      // Error alert
      : alert('Error deleting card')
  }

  // Add card to API
  const addCard = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/studycards', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        question: `${newQuestion}`,
        answer: `${newAnswer}`
      })
    })

    const data = await res.json()

    res.status === 201
      ? setAllCards([...allCards, data.newStudyCard])
      : alert('Error adding card')
  }


  // Update card in API
  const updateCard = async (e) => {
    e.preventDefault();
    console.log('Updating card')

    const res = await fetch(`http://localhost:8000/api/studycards/${updateID}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        question: `${updateQuestion}`,
        answer: `${updateAnswer}`
      })
    })

    const data = await res.json()

    res.status === 200
      // Updates card in UI
      ? setAllCards(allCards.map((card) => card._id === data._id ? data : card ))
      // Error alert
      : alert('Error updating card')
  }

  return (
    <Router>
        <Header />
        <div className="pageBody">
        <Route path='/' exact render={() => 
          <>
              <Article />
              <GettingStartedList />
              <Launch />
              <ExampleCards />
          </>
          } />
          <Route path = '/deck' exact render={() =>
            <> 
              <Title title="My Examables" />
              <DeckCardList 
                allCards={allCards} 
                onDelete={deleteCard} 
                onUpdate={cardToBeUpdated}
                // fetchAllCards={fetchAllCards}
                />
              <Link to="/deck/add-card"><Button buttonPosition="btn--center" text="Add new examinable" /></Link>
            </>
            }/>
          <Route path = '/deck/add-card' exact render={() =>
            <> 
              <Title title="Add An Examable" />
              <AddCard
                question='Q'
                answer='A' 
                onSubmit={addCard}
                onQuestionChange={value => setNewQuestion(value)}
                onAnswerChange={value => setNewAnswer(value)}
                />
            </>
            }/>
          <Route path = '/deck/update-card' exact render={() =>
            <> 
              <Title title="Update An Examable" />
              <AddCard 
                ID={updateID}
                question={updateQuestion}
                answer={updateAnswer}
                onQuestionChange={value => setUpdateQuestion(value)}
                onAnswerChange={value => setUpdateAnswer(value)}
                onSubmit={updateCard}
              />
            </>
            }/>
          <Route path='/study-now' exact>
            <>
              <p>The study now page, maybe some logic for when different components are displayed.</p>
            </>
          </Route>
          
          </div>
        <Footer />
     
    </Router>
  );
}

export default App;

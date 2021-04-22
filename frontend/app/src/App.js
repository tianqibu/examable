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
import StudyExamable from './components/StudyExamable'

import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

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
  const [showFlash, setShowFlash] = useState(null);
  const [flash, setFlash] = useState({
        severity: '',
        message: '',                                  
  })
 
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

  // Flash Message 
  const displayFlashMessage = () => {
    setShowFlash(true)
    setTimeout(() => {
      setShowFlash(false);
    }, 5000);
  }

  // Card to be updated
  const cardToBeUpdated = async (details) => {
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

    displayFlashMessage();

    if (res.status === 204) {
      // Deletes card from UI
      setAllCards(allCards.filter((c) => c._id !== card.id))
      setFlash({
        message: 'Success! The card has been deleted.',
        severity:'success'
      })
    } else {
      setFlash({
        message: 'Error! The card has not been deleted. Please try again.',
        severity: 'error'
      })
    }
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

    displayFlashMessage()

    if (res.status === 201) {
      setAllCards([...allCards, data.newStudyCard]) // Adds card to UI 
      setFlash({
        message: 'Success! The card has been added.',
        severity:'success'
      })
    } else {
      setFlash({
        message: 'Error! The card has not been added. Please try again.',
        severity:'error'
      })
    }
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

    displayFlashMessage()

    if (res.status === 200) {
      // Updates card in UI
      setAllCards(allCards.map((card) => card._id === data._id ? data : card ))
      // Success message
      setFlash({
        message: 'Success! The card has been updated.',
        severity:'success'
      })
    } else {
      // Error message
      setFlash({
        message: 'Error! The card has not been updated. Please try again.',
        severity:'error'
      })
    }}

  return (
    <Router>
        { 
          showFlash
          ? (
              <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
                <Alert classname="alert" severity={flash.severity}>{flash.message}</Alert>
              </Fade>
            )
          : null 
        }
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
                <Link to="/deck"><Button text="My examables" buttonStyle="btn--blue"/></Link>
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
              <Link to="/deck"><Button text="My examables" buttonStyle="btn--blue"/></Link>
            </>
            }/>
          <Route path='/study-now' exact>
            <>
              <StudyExamable />
            </>
          </Route>
          
          </div>
        <Footer />
     
    </Router>
  );
}

export default App;
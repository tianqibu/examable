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

  // Flash message
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

  // Delete card
  const deleteCard = async (card) => {
    
    // API
    const id = card.id
    const res = await fetch(`http://localhost:8000/api/studycards/${id}`, {
      method: 'DELETE',
    })

    displayFlashMessage();

    if (res.status === 204) {
      // UI
      setAllCards(allCards.filter((c) => c._id !== card.id))
      // Flash message
      setFlash({
        message: 'Success! The examable has been deleted.',
        severity:'success'
      })
    } else {
      setFlash({
        message: 'Error! The examable has not been deleted. Please try again.',
        severity: 'error'
      })
    }
  }

  // Add card
  const addCard = async (e) => {
    e.preventDefault();
    // Add card to DB 
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
      // Adds card to UI
      setAllCards([...allCards, data.newStudyCard]) 
      // Flash message
      setFlash({
        message: 'Success! The examable has been added.',
        severity:'success'
      })
    } else {
      setFlash({
        message: 'Error! The examable has not been added. Please try again.',
        severity:'error'
      })
    }
  }

  // Update card 
  const updateCard = async (e) => {
    e.preventDefault();
    // Update card in DB
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
      // Update card in UI
      setAllCards(allCards.map((card) => card._id === data._id ? data : card ))
      // Success message
      setFlash({
        message: 'Success! The examable has been updated.',
        severity:'success'
      })
    } else {
      // Error message
      setFlash({
        message: 'Error! The examable has not been updated. Please try again.',
        severity:'error'
      })
    }}

  return (
    <Router>
      { 
          showFlash
          ? (
              <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
                <Alert className="alert" severity={flash.severity}>{flash.message}</Alert>
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
              <div className="btn--center">
                <Link to="/deck/add-card">
                  <Button 
                      buttonSize="btn--large" 
                      text="Add new examable" />
                </Link>
              </div>
              <DeckCardList 
                allCards={allCards} 
                onDelete={deleteCard} 
                onUpdate={cardToBeUpdated}
                />
            </>

            }/>
          <Route path = '/deck/add-card' exact render={() =>
            <> 
              <Title title="Add An Examable" />
              <AddCard
                onSubmit={addCard}
                onQuestionChange={value => setNewQuestion(value)}
                onAnswerChange={value => setNewAnswer(value)}
                placeholder="Type here..."
                />
                <div className="btn--center">
                  <Link to="/deck">
                    <Button 
                      text="My examables" 
                      buttonStyle="btn--blue" 
                      buttonSize="btn--large"
                    />
                  </Link>
                </div>
                <div className="spacer"></div>
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
              <div className="btn--center">
                  <Link to="/deck">
                    <Button 
                      text="My examables" 
                      buttonStyle="btn--blue" 
                      buttonSize="btn--large"
                    />
                  </Link>
              </div>
              <div className="spacer"></div>
            </>
            }/>
          <Route path='/study-now' exact>
            <>
              <Title title="Study Examables" />
              <StudyExamable />
            </>
          </Route>
          
          </div>
        <Footer />
    </Router>
  );
}

export default App;
import Header from './components/Header'
import GettingStartedList from './components/GettingStartedList'
import Footer from './components/Footer'
import Launch from './components/Launch'
import Article from './components/Article'
import ExampleCards from './components/ExampleCards'
import StudyExamable from './components/StudyExamable'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  

  useEffect(() => {
    // Fetch all cards
    const fetchAllCards = async () => {
     const res = await fetch('http://localhost:8000/api/studycards', {
         method: 'GET',
     })
     const data = await res.json()
     return data
  }
  fetchAllCards()
  }, [])

  

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
          <Route path = '/deck' exact >
            <> <p>
                The Deck route - maybe logic here for frames 2a and 2b 
                  depending on how it wants doing.
              </p>
            </>
          </Route>
          <Route path = '/deck/add-card' exact>
            <>Route for adding new card</>
          </Route>
          <Route path = '/deck/update-card' exact>
            <>Route for updating a card</>
          </Route>
          <Route 
          path='/study-now'
          exact
          >
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

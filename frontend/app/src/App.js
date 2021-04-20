import Header from './components/Header'
import GettingStartedList from './components/GettingStartedList'
import Footer from './components/Footer'
import Launch from './components/Launch'
import Article from './components/Article'
import ExampleCards from './components/ExampleCards'

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
      console.log(data)
      return data
  }
  
  fetchAllCards()
  }, [])


  return (
    <Router>
    <div className="container">
     <Header />
     <Route path='/' exact render={() => 
      <>
        <Article />
        <GettingStartedList />
        <Launch />
        <ExampleCards />
      </>
      } />
      <Route path = '/deck' exact >
        <> <p>The deck page</p> </>
      </Route>
      <Route path='/study-now' exact>
        <>The study now page</>
      </Route>
     <Footer />
    </div>
    </Router>
  );
}

export default App;

import Header from './components/Header'
import GettingStartedList from './components/GettingStartedList'
import Footer from './components/Footer'
import Launch from './components/Launch'
import Article from './components/Article'
import ExampleCards from './components/ExampleCards'
import { useEffect } from 'react'

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
    <div className="container">
     <Header />
     <Article />
     <GettingStartedList />
     <Launch />
     <ExampleCards />
     <Footer />
     
    </div>
  );
}

export default App;

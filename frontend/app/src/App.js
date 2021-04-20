import Header from './components/Header'
import './App.scss';
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
    </div>
  );
}

export default App;

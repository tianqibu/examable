import Header from './components/Header'
import { useEffect } from 'react'
import './App.css';

function App() {
   
  useEffect(() => {
     // Fetch all cards
     const fetchAllCards = async () => {
      const res = await fetch(`http://localhost:8000/api/studycards`, {
          method: 'GET',
      })
      const data = await res.json()
      console.log(data)
      return data
  }https://github.com/tianqibu/examable/blob/main/frontend/app/src/App.js
  
  fetchAllCards()
  }, [])


  return (
    <div className="container">
     <Header />
    </div>
  );
}

export default App;

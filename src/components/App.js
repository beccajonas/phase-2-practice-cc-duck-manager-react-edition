import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:4001/ducks')
    .then(res => res.json())
    .then(data => setDucks(data))
  }, [featuredDuck])


  function displayFeatureDuck(selectedDuck) {
    setFeaturedDuck(selectedDuck)
  }

  function showForm() {
    console.log('click');
    setDuckFormOpen(!duckFormOpen)
  }

  function handleNewDuck(duckInput) {
    setDucks([...ducks, duckInput])

  }

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList ducks={ducks} displayFeatureDuck={displayFeatureDuck} />

      <DuckDisplay featuredDuck={featuredDuck} />
      
      { duckFormOpen ? 
      <button onClick={showForm}>Open Duck Form</button> 
      : <button onClick={showForm}>Close Duck Form</button> }
    

      {duckFormOpen ? null : <DuckForm handleNewDuck={handleNewDuck} />}
      

    </div>
  );
}

export default App;

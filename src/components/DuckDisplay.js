import React, {useEffect, useState} from 'react'

function DuckDisplay({ featuredDuck }) {

  const {img_url, name, id, likes} = featuredDuck
  const [currentLikes, setCurrentLikes] = useState(likes)
      
  useEffect(() => {
    setCurrentLikes(likes)
  }, [featuredDuck])

  function handleIncrementLikes() {
    setCurrentLikes(currentLikes + 1)

  fetch(`http://localhost:4001/ducks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: currentLikes + 1})
    })
  }

    return (
      <div className="duck-display">
        {/* show all the details for the featuredDuck state here */}
        <h2>{name}</h2>
        <img src={img_url} alt={name} />
  
        <button onClick={handleIncrementLikes} >{currentLikes} likes</button>
  
      </div>
    )
  }
  
  export default DuckDisplay
  
  





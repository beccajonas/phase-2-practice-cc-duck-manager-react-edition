import React, {useState} from 'react'

function DuckForm({ handleNewDuck }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    const newDuck = {
      name,
      image,
      likes: 0
    }

    fetch('http://localhost:4001/ducks', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newDuck)
    })
    .then(res => res.json())
    .then(data => handleNewDuck(data))

  }

  return (
    <form onSubmit={handleSubmit} id="new-duck-form">
       <label htmlFor="duck-name-input">New Duck Name:</label>
       <input 
          type="text" 
          name="duck-name-input"
          onChange={handleName}
          value={name} />

       <label htmlFor="duck-image-input">New Duck Image URL:</label>
       <input 
       type="text" 
       name="duck-image-input"
       onChange={handleImage}
       value={image} />

       <input type="submit" value="Create Duck" />
    </form>
  )
}

export default DuckForm

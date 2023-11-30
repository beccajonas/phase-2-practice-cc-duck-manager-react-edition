import React from 'react'
import DuckListCard from './DuckListCard'

function DuckList({ ducks , displayFeatureDuck }) {

  const renderDucks = ducks.map(duck => 
    <DuckListCard 
      duck={duck} 
      key={duck.id} 
      displayFeatureDuck={displayFeatureDuck}
    />)
  return (

    <div className="duck-nav">
      {renderDucks}
    </div>

  )
}

export default DuckList

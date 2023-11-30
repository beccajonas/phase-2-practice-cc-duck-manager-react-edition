function DuckListCard({duck, displayFeatureDuck}) {
  const {img_url, name} = duck

  function handleClick() {
    displayFeatureDuck(duck);
  }

  return (
    <img
      onClick={handleClick} 
      src={img_url} 
      alt={name} 
    />
  )
}

export default DuckListCard

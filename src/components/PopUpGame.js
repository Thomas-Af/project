export default function PopUpGame(props) {
 const { data } = props

 console.log('trucbidulechouette');

 if (!data) {
  return <div>Loading...</div>;
 } if (data) {
  console.log('data game', data)

  function closePopUp () {
   document.getElementById('popUpGame').style.display = 'none'
  }


  const genreName = data.genres.map(item => {
   return <li key={item.id}> {item.name} </li>
  })

  const platformName = data.platforms.map(item => {
   return <li key={item.platform.id}> {item.platform.name} </li>
  })

  const rating = data.ratings.map(item => {
   return <li key={item.id}> {item.title} - {item.percent} %</li>
  })

  const pictures = data.short_screenshots.map(item => {
   return <li key={item.id}><img src={item.image} alt={item.name}/></li>
  })

  const avis = data.ratings_count

  return (
   <div className='popUpGame' id="popUpGame">
    <div className='block'>
     <div className='close' onClick={closePopUp}>X</div>
     <img src={data.background_image} alt={data.name} className='img'/>
     <div className='content'>
      { data.name }
      <ul className="genre">
       {genreName}
      </ul>
      <ul>
      {platformName}
      </ul>

      <p>Sorti le : { data.released}</p>
      <p>Noté : { data.rating} / 5</p>
      <p>Note ESRB : { data.esrb_rating.name}</p>

      <p>Avis : { avis }</p>
      <ul>
       {rating}
      </ul>

     </div>
     <div className='pictures'>
     <p>Images du jeu : </p>
      <ul className='picture'>
       {pictures}
      </ul>
     </div>

    </div>
   </div>
  )

 } 

}

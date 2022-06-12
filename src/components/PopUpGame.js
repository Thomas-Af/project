import { Link } from "react-router-dom";


export default function PopUpGame(props) {
 const { data, link } = props

 if (!data) {
  return <div id="loader" className="blockLoader">
  <div className="loader"></div>
 </div>;
 } if (data) {

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

  const stores = data.stores.map(item => {
   return (
   <li key={item.id}>
    <a target='_blank' href={'https://' + item.store.domain}>
     {item.store.name}
     </a>
   </li>
   )
  })

  const avis = data.ratings_count

  return (
   <div className='popUpGame' id="popUpGame">
    <div className='block'>
     <div className='close' onClick={closePopUp}>
     <Link to={link}>X</Link>
      </div>
     <img src={data.background_image} alt={data.name} className='img'/>
     <div className='content'>
      <p className="title">{ data.name }</p>
      <ul className="genre">
       {genreName}
      </ul>
      <div>
        <p><span>Disponible sur : </span></p>
        <ul>
        {platformName}
        </ul>
      </div>

      <p><span>Sorti le : </span>{ data.released}</p>
      <p><span>Noté : </span>{ data.rating} / 5 &#x2605;</p>
      <p><span>Note ESRB : </span>{ data.esrb_rating.name}</p>

      <p><span>Avis : </span>{ avis }</p>
      <ul>
       {rating}
      </ul>

      <div>
        <p><span>Téléchargeable sur : </span></p>
        <ul>
        {stores}
        </ul>
      </div>

     </div>
     <div className='pictures'>
     <p><span>Images du jeu : </span></p>
      <ul className='picture'>
       {pictures}
      </ul>
     </div>

    </div>
   </div>
  )

 } 

}

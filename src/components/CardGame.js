export default function CardGame(props) {
 const { name, genre, platform, rate, img, like, remove, removeOrLike } = props

const genreName = genre.map(item => {
 return <li key={item.id}> {item.name} </li>
})

const platformName = platform.map(item => {
 return <li key={item.platform.id}> {item.platform.name} </li>
})

 return  (
  <div className='card'>
   <img src={img} alt={name}/>
   {removeOrLike === 'like' 
   ? <div className='like' onClick={like}>&#9825;</div> 
   : <div className='like' onClick={remove}>X</div>}
   {/* <div className='like' onClick={like}>&#9825;</div>
   <div className='like' onClick={remove}>X</div> */}
   <div className='cardInfo'>
    <ul className="genre">
    {genreName}
    </ul>
    <p className="gameName">{name}</p>
    <p className="dispo">Disponible sur : </p>
    <ul className="platform">
    {platformName}
    </ul>
    <p className="rating"><span>{rate}</span> / 5</p>
   </div>
  </div>
 )

}

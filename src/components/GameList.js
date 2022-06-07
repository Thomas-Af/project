import CardGame from './CardGame';

export default function GameList(props) {
 const { data, like } = props;

 const list = data.map(item => {
  return <CardGame key={item.id} name={item.name} rate={item.rating} img={item.background_image} genre={item.genres} platform={item.platforms} like={()=>like(item)} />
 })

 return  (
  <div className="GameList">
    { list }
  </div>
 )

}
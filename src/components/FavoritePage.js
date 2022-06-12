import { useState, useEffect } from "react";
import GameList from './GameList';

export function FavoritePage() {

 const [favoriteGame, setFavoriteGame] = useState([]);

 const s = localStorage.getItem('favs')
   
 const object = s === undefined ? [] : JSON.parse(s)

 function removeFavorite(object) {

  console.log('object', object)
  const newFavorite = {...object}
  let s = localStorage.getItem('favs')

  let newFavs = s === undefined ? [] : JSON.parse(s)

  newFavs = newFavs.filter(item=>item.id !== newFavorite.id )

  localStorage.setItem('favs', JSON.stringify(newFavs))

  s = localStorage.getItem('favs')
   
  object = s === undefined ? [] : JSON.parse(s)

  setFavoriteGame(object)

}

 
 return  (
  <div>
   {s == null 
   ? <div>Pas de favoris encore</div>
   : <GameList data={object} remove={removeFavorite}/> }
   
  </div>
 )
}

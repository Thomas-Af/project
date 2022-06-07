import { useState, useEffect } from "react";
import GameList from './GameList';
import popUpGame from './PopUpGame';

import fetchData from '../utils/fetchData';

export function Homepage() {
 const [data, setData] = useState([]);
 const [favorite, setFavorite] = useState([]);


 useEffect(() => {
  fetchData('games')
  .then(response => {
   setData(response.results);
   console.log('setData', data)
  });
 }, []);


   // console.log('Data Updated', data)
   // console.log('favorite', favorite)
   let favoriteElement = data;
   // const favoriteElement = favorite.map(item => {
   //    console.log('item', item)
   //    return item.id
   // })
   console.log('favoriteElement', favoriteElement)

   function AddRemoveFavorite(data) {
      // console.log(data.name)
      console.log('data.id', data.id)
      
      const newFavorite = {...data}
      console.log('newFavorite', newFavorite)

      if (favorite.length > 0) {
         setFavorite(prevFavorite => {
            console.log('IF favoriteElement', favoriteElement)
            console.log('test data.id', data.id)


            const fav = favoriteElement.includes(data.id) ? prevFavorite.filter(data=>data.id !== favoriteElement ) : [...prevFavorite, newFavorite];

            console.log('fav', fav)
            localStorage.setItem('Favorite', fav);
            return fav
         })
      } else {
         console.log('else new favorite', newFavorite)
         setFavorite(newFavorite)
      }
   }
   
   console.log('favorite', favorite)


 
 return (
  <>
   <GameList data={data} like={AddRemoveFavorite}/>
  </>
   )
}


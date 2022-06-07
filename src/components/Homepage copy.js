import { useState, useEffect } from "react";
import GameList from './GameList';

import fetchData from '../utils/fetchData';

export function Homepage() {
 const [data, setData] = useState([]);
 let [favorite, setFavorite] = useState([]);


 useEffect(() => {
  fetchData('games')
  .then(response => {
   setData(response.results);
   console.log('setData', data)
  });
 }, []);

   // console.log('Data Updated', data)
   console.log('favorite', favorite)
   // let favoriteElement = data;
   // let favoriteElement = favorite.map(item => {
   //    console.log('item', item)
   //    return item.id
   // });
   // console.log('favoriteElement', favoriteElement)

   function AddRemoveFavorite(data) {
      // console.log(data.name)
      // console.log('data.id', data.id)
      
      const newFavorite = {...data}
      // console.log('newFavorite', newFavorite)

      if (favorite.length > 0) {
         setFavorite(prevFavorite => {
            console.log('IF favoriteElement', favorite)
            // console.log('test data.id', data.id)

            if(favorite.includes(newFavorite)) {
               favorite = favorite.filter(item => item !== newFavorite);
            } else {
               favorite.push(newFavorite)
            }

            // console.log('fav', fav)
            localStorage.setItem('Favorite', favorite);
         })
      } else {
         console.log('else new favorite', newFavorite)
         favorite.push(newFavorite)
         // setFavorite(...newFavorite)
      }
   }
   
   console.log('favorite', favorite)


 
 return (
  <>
   <GameList data={data} action={AddRemoveFavorite}/>
  </>
   )
}


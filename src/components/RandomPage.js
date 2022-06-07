import { useState, useEffect } from "react";
import PopUpGame from './PopUpGame';
import fetchData from '../utils/fetchData';


export function RandomPage() {

 const [data, setData] = useState([]);


 useEffect(() => {
   fetchData('games')
  .then(response => {
   setData(response.results);
   console.log('setData', data)
  })
 }, []);

 // function randomGame () {
 //  console.log('start');
 //  const randomGame = Math.floor(Math.random()*data.length);
 //  const game = data[randomGame];
 //  console.log('game', game);


  // if (!game) {
  //  console.log('!game');
  //  return <div>aroLoading...</div>;
  // } if (game) { 
  //  console.log('game');
  //  return <div><PopUpGame data={game}/></div>;
  // }
  // const pop = <PopUpGame data={game}/>;
  // console.log(pop)
  // return pop
 // }

 const randomGame = Math.floor(Math.random()*data.length);
  const game = data[randomGame];





 return  (
  <>
  {/* <button onClick={randomGame}>Trouver un nouveau jeu ! </button> */}
   <PopUpGame data={game}/>
  </>
 )
}

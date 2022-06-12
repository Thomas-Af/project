import { useState, useEffect } from "react";
import PopUpGame from './PopUpGame';
import fetchData from '../utils/fetchData';

export function RandomPage() {

 const [data, setData] = useState([]);


 useEffect(() => {
   fetchData('games')
  .then(response => {
   setData(response.results);
  })
 }, []);

 const randomGame = Math.floor(Math.random()*data.length);
 const game = data[randomGame];

 return  (
  <>
   <PopUpGame data={game} link="/"/>
  </>
 )
}

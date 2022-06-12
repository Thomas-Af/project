import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Menu() {

 const [count, setCount] = useState();

 useEffect(() => {
  const s = localStorage.getItem('favs')
  let favoriteLocal = s === undefined ? [] : JSON.parse(s)
  
  if (favoriteLocal) {
     let count = favoriteLocal.length
     setCount(count)
  } 
 }, []);

 return  (
  <div className='menu'>
   <nav>
    <div>
    <Link to="/">Accueil</Link>
    <Link to="Favorite">Favoris <span>{count}</span></Link>
    </div>
    <Link to="Random">Random</Link>
   </nav>
  </div>
 )

}

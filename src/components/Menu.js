import { Link } from "react-router-dom";

export default function menu() {

 return  (
  <div className='menu'>
   <nav>
    <Link to="/">HomePage</Link>
    <Link to="Favorite">Favorite</Link>
    <Link to="Random">RandomGame</Link>
   </nav>
  </div>
 )

}

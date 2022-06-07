import { Link } from "react-router-dom";

export default function menu() {

 return  (
  <div className='menu'>
   <nav>
    <Link to="/">HomePage</Link>
    <Link to="Gender">GenderPage</Link>
    <Link to="Random">RandomPage</Link>
    <Link to="Favorite">Favorite</Link>
   </nav>
  </div>
 )

}

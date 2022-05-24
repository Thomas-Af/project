import { useState, useEffect } from "react";

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch("http://api.openeventdatabase.org/event?what=sport.competition.olympics&start=20160803&stop=20160822&limit=3500")
  .then(function (maReponse) {
    console.log("maReponse", maReponse); 

    return maReponse.json();
  })
  .then(function (maDonnee) {
    console.log("maDonnee", maDonnee); 
    console.log("Sports Name", maDonnee.features); 

    maDonnee.features.forEach(element => {
      console.log('Nom', element.properties.name)
    });
  });
 }, []);


 

 return <div className="App">App</div>;
}

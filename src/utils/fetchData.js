const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`


export default function fetchData() {
 fetch(url)
 .then(function (maReponse) {

   return maReponse.json();
 })
 .then(function (maDonnee) {

 });
}
// const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
const url = `https://api.rawg.io/api/`


export default function fetchData(endpoint) {
 return fetch(url + endpoint + `?key=${process.env.REACT_APP_API_KEY}&page_size=60`)
 .then(function (maReponse) {

   return maReponse.json();
 })
 // .then(function (maDonnee) {

 //   return maDonnee;

 // });
}
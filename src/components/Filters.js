export default function CardGame(props) {
 const { data, active } = props;
 
 const genres = data.map(item => item.genres.map(item => item.name)).flat();
 const uniqueGenres = [...new Set(genres)];
 
 const oneGenre = uniqueGenres.map(item => {
  return <button 
  className={active === item ? 'filter active' : 'filter'}
  key={item} 
  onClick={() => props.filter(item)}>
    {item}
  </button>
});

 return  (
  <div className='filters'>
   {oneGenre}
  </div>
 )

}

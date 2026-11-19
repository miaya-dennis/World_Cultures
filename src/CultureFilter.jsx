   function CultureFilter({ cultures }) {
   
  

  const unitedStates = cultures.filter(  (item) => item.country === "United States" );
  
  const countryUnited = unitedStates.map( (item, index) => (
    <article key={index}>
      <h1>{item.country}</h1>
      <p>Continent: {item.continent}</p>
      <p>Celebration: {item.celebration}</p>
      <p>Tradition: {item.celebration}</p>    
      <p>Languages: {item.celebration}</p>
      <p>Description: {item.celebration}</p>
    </article>
  ));

  return (
    <div>
      <h1>U.S. CULTURES</h1>
      <div className="grid">
        { countryUnited } 
      </div>
    </div>
  );
} export default CultureFilter
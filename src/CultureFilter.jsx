   function CultureFilter({ cultures }) {
   
  

  const unitedStates = cultures.filter(  (item) => item.country === "United States" );
  
  const countryUnited = unitedStates.map( (item, index) => (
    <article className="usa-card" key={index}>
      <h1>{item.country}</h1>
      <p>Continent: {item.continent}</p>
      <p>Celebration: {item.celebration}</p>
      <p>Tradition: {item.tradition}</p>    
      <p>Languages: {item.languages}</p>
      <p>Description: {item.description}</p>
    </article>
  ));

  const france = cultures.filter(  (item) => item.country === "France" );
  
  const countryFrance = france.map( (item, index) => (
    <article className="france-card" key={index}>
      <h1>{item.country}</h1>
      <p>Continent: {item.continent}</p>
      <p>Celebration: {item.celebration}</p>
      <p>Tradition: {item.tradition}</p>    
      <p>Languages: {item.languages}</p>
      <p>Description: {item.description}</p>
    </article>
  ));

  return (
   <div>
     
     <details className="usa-dropdown">
      <summary> U.S. CULTURE </summary>

     <div className="grid">
      {countryUnited}
     </div>
     </details>

      <details className="france-dropdown">
      <summary> FRENCH CULTURE </summary>

       <div className="grid">
      {countryFrance}
     </div>
     </details>

   </div>
  );
} export default CultureFilter
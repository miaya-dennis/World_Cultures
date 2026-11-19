import { useState } from 'react'




function CultureSearch ({ cultures }) {
  const[search, setSearch] = useState("");

  const filteredCultures = search.trim()? cultures.filter((culture) =>culture.country.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
      type="text"
      placeholder="Search cultures"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCultures.map((culture, index) => (
       <article key={index}>
         <h3>{culture.country}</h3> 
         <p>Continent: {culture.continent}</p>
         <p>Celebration: {culture.celebration}</p>
         <p>Traditions: {culture.tradition}</p>
         <p>Languages: {culture.languages}</p>
         <p>Description: {culture.description}</p>
       </article>
     ))}
    </div>
    );
}
 export default CultureSearch;
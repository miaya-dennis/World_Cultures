import { useState } from 'react'






/*function CultureSearch({cultures}) {
const [query, setQuery] = useState("")
console.log(cultures)

const searchClick=() => {
  const input=document.getElementById("query")
  const inputValue=input.value
  setQuery(input.value)
}
const searchCultures=cultures.filter(culture=>culture.country.toLowerCase().includes(query.toLowerCase()));
console.log("Search Cultures", searchCultures)
return (
  <div>
      <input type="text" id="query" />
      <button onClick={searchClick}>Search</button>
      {searchCultures.map((culture) => ( <p key={culture.id} className="card">{culture.country}</p>))}
     
    </div>
  )
}*/

function CultureSearch ({ cultures }) {
  const[search, setSearch] = useState("");

  const filteredCultures = search.trim()? cultures.filter((culture) =>culture.country.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="container">
      <input
      type="text"
      placeholder="Search cultures"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCultures.map((culture, index) => (
       <div key={index}>
         <h3>{culture.country}</h3> 
         <p>Continent: {culture.continent}</p>
         <p>Celebration: {culture.celebration}</p>
         <p>Traditions: {culture.tradition}</p>
         <p>Languages: {culture.languages}</p>
         <p>Description: {culture.description}</p>
       </div>
     ))}
    </div>
    );
}
 export default CultureSearch;
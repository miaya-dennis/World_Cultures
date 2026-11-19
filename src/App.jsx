import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './utils/supabase'
import CultureSearch from './CultureSearch.jsx'
import CultureFilter from './CultureFilter.jsx'


function App() {
  const [cultures, setCultures] = useState([])
  
  

  useEffect(() => {
  async function getCultures() {
    console.log("Inserting culture")
    const { data: cultures, error } = await supabase.from('cultures').select()
    setCultures(cultures)
    console.log(cultures)

    if(cultures) {
      setCultures(cultures)
    }  
  }

  getCultures()
}, [])



  return (
    <div className="container">
      <h1>World Cultures</h1>
      <div className="container">
        <CultureSearch cultures={cultures}/>
      </div>
      <CultureFilter cultures={cultures}/>

    </div>


   

  
    
  )
}


export default App

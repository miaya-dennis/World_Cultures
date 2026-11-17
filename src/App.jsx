import { useState } from 'react'
import './App.css'
import { supabase } from './utils/supabase'

function App() {
  const [culture, setCultures] = useState([])

  async function insertCountry() {
    console.log("Inserting country")
    const { data, error } = await supabase.from("culture").select()
    console.log(data)
    console.log(error)
    setCultures(data)
  }

  return (
    <>
      <h1>World Cultures</h1>
      <button onClick={insertCountry}>
        View Countries
      </button>

    </>
    
  )
}

export default App

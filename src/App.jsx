import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './utils/supabase'
import CultureSearch from './CultureSearch.jsx'
import CultureFilter from './CultureFilter.jsx'
import CultureSlideshow from './CultureImages.jsx'



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
    <div className="app-container">
      
      <div className="container">
        <CultureSearch cultures={cultures}/>
      </div>

       <div className="culture-video">
        <h1> Explore World Cultures</h1>

        <video  autoPlay loop muted playsInline width="600" controls>
          <source
          src="https://lqexrnwjbvsdyfhxuxlc.supabase.co/storage/v1/object/public/CultureClip/Culture%20and%20Diversity%20Stock%20Video%20by%20FILMPAC.webm"
          type="video/mp4"
          />
        </video>
      </div>
    
      <CultureFilter cultures={cultures}/>

        <CultureSlideshow />
     
<footer className="app-footer">
  <h3> World Cultures</h3>
  <p>Explore traditons, languages, and celebrations around the world.</p>
  <p>&copy; 2026 World Cultures</p>
</footer>
    </div>


   

  
    
  )
}


export default App

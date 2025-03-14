import { useState } from 'react'
import './App.css'

function App() {
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY="b99c4474bd22356f2c88a373904c8dcc";

  const [city, setCity] = useState("")

  const stateCode= "DL";
  const countryCode="+91";

  const getWeatherInfo = async (city)=>{
     let response= await fetch(`${API_URL}+q?${city},${stateCode},${countryCode}&limit={2}&appid=${API_KEY}`)
      let jsonResponse = await response.json();
      console.log(jsonResponse);

  }

  const handleChange= (event)=> {
        setCity(event.target.value)
      
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setCity("");
    getWeatherInfo();
    
  }
  return (
    <>
    <h1>Search weather</h1>
    <form onSubmit={handleSubmit} action="">
      <textarea onChange={handleChange} value={city} name="" id=""></textarea>
      <button>Search</button>
    </form>
    </>
  )
}

export default App

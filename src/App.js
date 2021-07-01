import React from "react"
import './App.css'
import Rows from './Rows'
import request from "./request"
import Banner from "./Banner"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Banner/>
      <Rows title="Netflix Original" fetchUrl={request.fetchNetflixOriginal} />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action Movie" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy Movie" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Horror Movie" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Crime Movies" fetchUrl={request.fetchCrimeMovies} />
      <Rows title="Documentries" fetchUrl={request.fetchUpcoming} />

    </div>
  )
}

export default App;

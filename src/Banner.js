import React,{useState,useEffect} from 'react'
import instance from './axios'
import request from './request'
import "./Banner.css"
function Banner() {
    const [movie, Setmovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request2 = await instance.get(request.fetchNetflixOriginal)
            Setmovie (request2.data.results[Math.floor(Math.random()*request2.data.results.length-1)])
        }
        fetchData()
        
    }, [])
    console.log(movie)

    return (
    <header className="banner" 
        style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center"}}>
            <div className="banner-content">
                <h1 className="banner-title">{movie?.title||movie?.name||movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner_description">{movie?.overview}</h1>
            </div>
            <div className="hidden-banner"/>
        </header>
    )
}

export default Banner

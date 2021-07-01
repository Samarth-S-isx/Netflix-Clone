import React, { useState, useEffect } from 'react'
import instance from './axios'
import './Row.css'

const image_url = "https://image.tmdb.org/t/p/original"

function Rows({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData();

    }, [fetchUrl])


    const moviestbd = movies.map((movie) => {
        return (
            <img className={`row-poster`} key={movie.id} src={`${image_url}${movie.poster_path}`} alt={movie.name} />

        )
    })

    //     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="row">
            <h2 style={{fontWeight: "300"}}>{title}</h2>
            <div className="row-posters">{moviestbd}</div>
        </div>
    )
}

export default Rows

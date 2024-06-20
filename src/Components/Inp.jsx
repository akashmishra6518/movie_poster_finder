import React, { useState as state, useState } from 'react'
import Butt from './Butt';
import MoviesDetails from './MoviesDetails';

export default function Inp() {
    const [movieTitle,setMovieTitle]=state("");
    const [res,setRes]=state({})
    const [error, setError] = useState(false);
    const checkMovie=data=>{
        if(!data.Title) setError(true);
        if(data.Title) setError(false)
        setRes(data);
    }
    return (
        <>
            <input type="text" 
                placeholder='enterr movie tile'
                onChange={e=>setMovieTitle(e.target.value)}
            />
            <Butt movieTitle={movieTitle} onCheckMovie={checkMovie}/>
            {
                Object.keys(res).length!=0  ? <MoviesDetails res={res}/> : error && <p>Movie not found!</p>
            }
        </>
    )
}

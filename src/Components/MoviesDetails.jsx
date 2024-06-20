import React from 'react'

const MoviesDetails = (props) => {
  return (
    <div>
      <img src={props.res.Poster} alt="Movie_Poster" />
    </div>
  )
}

export default MoviesDetails

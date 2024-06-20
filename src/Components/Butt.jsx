import React from 'react'
import data from '../assets/info'

export default function Butt(props) {
    const clickHandler=()=>{
        const res=data.find(item=>{
            return item.Title.toLowerCase()===props.movieTitle.toLowerCase()
        })
        res ? props.onCheckMovie(res) : props.onCheckMovie({})
    }
  return (
    <>
        <button onClick={clickHandler}>Search</button>
    </>
  )
}

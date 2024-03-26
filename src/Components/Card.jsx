
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const {name, username} = item
  return (
    <div className="card">
        <Link to={'/dentista/' + item.id}><img className="card" src='public/images/doctor.jpg' alt="" /></Link>
        <h3>{name}</h3>
        <h4>{username}</h4>
    </div>
  )
}

export default Card
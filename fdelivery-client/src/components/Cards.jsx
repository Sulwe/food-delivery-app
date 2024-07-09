import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

const Cards = ({item}) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled)
  } 
  return (
      <div className="card w-96 bg-base-100 shadow-xl relative">
        <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFilled ? 'text-rose-500' : 'text-white'}`} 
        onClick={handleHeartClick}
        >
          <FaHeart className='h-5 w-5 cursor-pointer'/>
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
              <img
              src={item.image}
              alt="dish" className='hover:scale-105 duration-300 transition-all md:h-72'/>
          </figure>
        </Link>
          <div className="card-body">
            <Link to={`/menu/${item._id}`}>
              {""}
              <h2 className="card-title">{item.name}</h2>
            </Link>
              <p>Description of the dish</p>
              <div className="card-actions justify-between items-center mt-2">
                <h5 className='font-semibold'><span>$</span>{item.price}</h5>
                <button className="btn btn-primary bg-green text-white">Buy Now</button>
              </div>
          </div>
      </div>

  )
}

export default Cards
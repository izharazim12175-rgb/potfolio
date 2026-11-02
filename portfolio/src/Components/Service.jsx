import React from 'react'

function Service({data}) {

    return (
    <div className='service'>
          <img src={data.image} alt={data.title} />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
      
    </div>
  )
}

export default Service
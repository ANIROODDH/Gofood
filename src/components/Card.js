import React from 'react'

export default function Card() {
  return (
     <div >
    <div className="card mt-3" style={{ "width": "18rem", "maxheight": "160px" }} >
      <img   src="https://sp.yimg.com/ib/th?&id=ODL.a81ae53d366aab6f62c390d3480d479d&w=116&h=146&c=4&dpr=2&rs=1" className="card-img-top" id='card' alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example .</p>
        <div className='container   w-100'>
          <select className='m-2 h-100  bg-success '>
            {Array.from(Array(6), (e, i) => { 
              return (
                <option key={i + 1} value={i + 1} >{i+1}</option>
              )
            })}
          </select>
          <select className='m-2 h-100  bg-success'>
            <option value='half'> half</option>\
            <option value='full'>full</option>
          </select>
         <div className='d-inline '> TotalPrice</div>
        </div>
      </div>
    </div> </div>
  )
}

import React from 'react'

export default function Crausel() {
  return (
    <div id="carouselExampleIndicators car" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" id='crausel'>
        <div className='carousel-caption' style={{zIndex:100}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline rounded bg-white" type="submit">Search</button>
    </form>
        </div>
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/random/900x700?burger" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/900x700?momos" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/900x700?burger" className="d-block w-100"style={{filter:"brightness(30%)"}} alt="..." />
        </div>
      </div>
      <section className="w-100 p-4 pb-4 d-flex justify-content-center align-items-center flex-column">
      </section>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

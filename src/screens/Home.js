import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Crausel from '../components/Crausel'

export default function Home() {
  return (
    <div>
      <div> <Nav /> </div>
      <div> < Crausel /></div>
      <div id='card'>
        <div> <Card /></div>
        <div> <Card /></div>
        <div> <Card /></div>
      </div>
      <div> <Footer /> </div>
    </div>

  )
}

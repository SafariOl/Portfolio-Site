import React from 'react'
import Designer from './Designer'
import About from './About'
import Work from './Work'
import NavBar from './NavBar'

export default function Main() {
  return (
    <>
      <NavBar />
      <main>
          <Designer /> 
          <About />
          <Work />
      </main>
    </>
  )
}

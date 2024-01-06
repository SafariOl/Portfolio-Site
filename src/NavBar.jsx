import { useState } from "react"
import React from 'react'

export default function NavBar() {
  const [active, setActive] = useState('')
  const links = document.querySelectorAll('.navigate a')
  links.forEach((link, index) => {
    link.addEventListener('click', () => {
      setActive('')
      links.forEach((otherLink, idx) => {
        if(idx !== index) otherLink.classList.remove('selected')
        else otherLink.classList.add('selected')
      })
    })
  })

  return (
      <nav>
        <div className={`navigate ${active}`}>
            <ul>
              <li><a href="#work">WORK</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#">INSTAGRAM</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </div>
          <div className="nav-bar">
            <div className="nav-bar__content">
              <a href="/"><p className="logo">Tilted</p></a>
              <div onClick={() => active === '' ? setActive('active') : setActive('')} className="burger">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </div>
      </nav>
  )
}

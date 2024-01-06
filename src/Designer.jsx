import React, {useLayoutEffect, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export default function Designer() {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.from('.hero', .5,{
      opacity: 0,
      y: 100,
      rotateY: 180,
      color: '#63007e',
      stagger:{
        amount: .4
      }
    })
  }, [])

  useEffect(() => {
    gsap.to('.hero', 1,{
      y: 100,
      stagger: {
        amount: .6
      },
      color: '#200e26',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 15%',
        end: '+=300',
        scrub: true,
      }
    })

    if(document.documentElement.clientWidth > 1000){
      gsap.to('.carousel', 2.5, {
        y: 250,
        scrollTrigger: {
          trigger: '.designer__block',
          start: 'top 20%',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <div className="designer">
      <div className='title'>
          <span className='hero'></span>
          <span className='hero'>#</span>
          <span className='hero'>T</span>
          <span className='hero'>H</span>
          <span className='hero'>E</span>
          <span className='hero'>D</span>
          <span className='hero'>E</span>
          <span className='hero'>S</span>
          <span className='hero'>I</span>
          <span className='hero'>G</span>
          <span className='hero'>N</span>
          <span className='hero'>E</span>
          <span className='hero'>R</span>
      </div>
      <div className="designer__block">
        <img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455794acf91498dcaa2c56_Hero%20Image.webp" alt="#" />
          <div className="carousel-block">
            <div className="carousel">
              <span>Noir Créatif  Noir Créatif  Noir Créatif</span>
              <span>Noir Créatif  Noir Créatif  Noir Créatif</span>
            </div>
          </div>
        <p>I specialize in creating <br />intuitive interfaces that bridge the gap <br />between aesthetics and <br />functionality.</p>
      </div>
    </div>

  )
}

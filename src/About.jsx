import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'


export default function About() {
  const bottomImg = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 300px)": function(){
        gsap.to('.top-img', {
          scrollTrigger: {
            trigger: '.about',
            start: 'top center',
            end: 'end -=100%',
            scrub: true,
          },
          x: 100,
        })
        gsap.to(bottomImg.current, {
          scrollTrigger: {
            trigger: '.about',
            start: 'top 40%',
            end: 'end -=100%',
            scrub: true,
          },
          y: -100,
        })
      }
    })

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function(){
          gsap.to('.white-text', 3.5,{
            width: '150%',
            stagger: {
              amount: 1.5
            },
            scrollTrigger:{
              trigger: '.about',
              start: 'top 60%',
              end: '+=90%',
              scrub: 1,
            }
          })
          
      }
    })
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function(){
          gsap.to('.white-text', 3.5,{
            width: '110%',
            stagger: {
              amount: 1.5
            },
            scrollTrigger:{
              trigger: '.about',
              start: 'top 60%',
              end: '+=90%',
              scrub: 1,
            }
          })
          
      }
    })
  })

  return (
    <div id='about' className='about'>
      <div className="about__block">
        <div className="about__text">
          <div className='about__text__row'>
            <div className="grey-text">Collaboration is at the heart of</div>
            <div className="white-text">Collaboration is at the heart of</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">my work. I thrive in dynamic</div>
            <div className="white-text">my work. I thrive in dynamic</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">environments where ideas flow</div>
            <div className="white-text">environments where ideas flow</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">freely and diverse perspectives</div>
            <div className="white-text">freely and diverse perspectives</div>
          </div>
          <div className='about__text__row'>
            <div className="grey-text">converge. </div>
            <div className="white-text">converge. </div>
          </div>
        </div>
        <img className='top-img' src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455b8d62fcd4e7342e1825_About%20Image%2001.webp" alt="#" />
      </div>
        <div className='about__block bottom-img'>
          <img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455b8dc6091113c458fe8b_About%20Image%2002.webp" alt="#" />
          <img ref={bottomImg} src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455b8d62fcd4e7342e1867_About%20Image%2003.webp" alt="#" />
        </div>
    </div>
  )
}

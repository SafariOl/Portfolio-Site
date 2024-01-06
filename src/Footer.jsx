import React, {useLayoutEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { updateStorageItem } from './SideBar'


export default function Footer() {
  gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
        gsap.to('.white-text-two', 1.5,{
          width: '100%',
          stagger: {
            amount: .5
          },
          scrollTrigger:{
            trigger: '.footer',
            start: 'top 60%',
            end: '+=90%',
            scrub: true,
          },
          ease: 'none'
        })
    
    }, [])

  return (
    <div className='footer'>
        <div className="footer__block">
            <div className="footer__text">
                <div className='footer__text__row'>
                    <div className="grey-text">LET'S MAKE SOMETHING</div>
                    <div className="white-text-two">LET'S MAKE SOMETHING</div>
                </div>
                <div className='footer__text__row'>
                    <div className="grey-text">AWESOME TOGETHER</div>
                    <div className="white-text-two">AWESOME TOGETHER</div>
                </div>
                <p>Convallis diam nisl vulputate rhoncus neque bibendum. Amet euismod arcu non semper eu rhoncus dolor amet sed.met euismod arcu</p>
            </div>
            <div>
                <div className="circul"><a href="#"><img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/6546a1aaba58cdd4e0ee5738_Red%20Star.svg" alt="#" /></a></div>
            </div>
        </div>
        <div className="footer__contacts">
            <a href='mailto:s.olha.vit@gmail.com'>S.OLHA.VIT@EMAIL.COM</a>
            <a href='https://github.com/SafariOl'>@SafariOl</a>
        </div>
        <div style={{width: '110%'}} className="line"></div>
        <div className="footer__services">
            <a href="#"><p>Created by SAFARIOl</p></a>
            <div style={
              {display: 'flex',
              alignItems: 'center',
              gap: '20px'
              }}>
              <div>
                <a onClick={() => updateStorageItem(0)} href="/guide"><p>Style Guide</p></a>
                <a onClick={() => updateStorageItem(1)} href="/help"><p>Instructions</p></a>
              </div>
              <div>
                <a onClick={() => updateStorageItem(2)} href="/licensing"><p>Licensing</p></a>
                <a onClick={() => updateStorageItem(3)} href="/log"><p>Change Log</p></a>
              </div>
            </div>
            <a href="#"><p>Powered by WEBFLOW</p></a>
        </div>
    </div>
  )
}

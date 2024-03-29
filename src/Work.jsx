import React, { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

export default function Work({titlePage, elem}) {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 982px)": function(){
                gsap.to('.work__block ', .5, {
                    y: 30,
                    height: 130,
                    opacity: 1,
                    stagger: {
                        amount: .2
                    },
                    scrollTrigger: {
                        trigger: '.work__block',
                        scrub: true,
                        start: 'top 80%',
                        end: '+=300'
                    }
                })
            }
        })

    })

    
    const obj = {
        'title': 'Works',
        'elem': -1
    }
    
    useLayoutEffect(() => {
        const items = document.querySelectorAll('.work__items__block')
        items.forEach((link, idx) => {
            if(idx == elem && elem !== null){
                link.style.display = 'none'
            }else{
                link.style.display = 'block'
            }
        })
    })
        

    function mouseEnter (order) {
        if(document.documentElement.clientWidth > 992){
            const image = document.querySelectorAll('.work__image')[order]
            image.classList.add('active')
        }
    }


    function mouseLeave (order){
        if(document.documentElement.clientWidth > 992){
            const image = document.querySelectorAll('.work__image')[order]
            image.classList.remove('active')
        }
    }

  return (
    <div id='work' className='work'>
        <h2 className='work-title'>{titlePage !== undefined ? titlePage : obj['title']}</h2>
        <div className='work__items'>
            <div>
                <a href='/feeling' className='work__items__block'>
                    <div onMouseEnter={() => mouseEnter(0)} onMouseLeave={() => mouseLeave(0)} className="work__block">
                        <div>
                            <h2>2023</h2>
                            <h2>FEELING Y</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da2f_max-andrey-TlRQin0iwjE-unsplash-min.jpg" alt="#" />
                    </div>
                </a>
                <a href='/marcomit' className='work__items__block'>
                    <div onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave(1)} className="work__block">
                        <div>
                            <h2>2023</h2>
                            <h2>MARCOMIT</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da30_martin-katler-rjASNUw3SDE-unsplash-min.jpg" alt="#" />
                    </div>
                </a>
                <a href='/ron-busti' className='work__items__block'>
                    <div onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave(2)} className="work__block">
                        <div>
                            <h2>2023</h2>
                            <h2>RON BUSTI</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da31_trinity-nguyen-_yMRmwr2OY8-unsplash-min.jpg" alt="#" />
                    </div>
                </a>
                <div className='work__items__block'>
                    <a href='/cereal' onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseLeave(3)} className="work__block">
                        <div>
                            <h2>2023</h2>
                            <h2>CEREAL</h2>
                        </div>
                    </a>
                    <div className="work__items__image">
                        <img className='work__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da32_sarath-p-raj-p8GmCEgSmmo-unsplash-min.jpg" alt="#" />
                    </div>
                </div>
                <a href='/romans' className='work__items__block'>
                    <div  onMouseEnter={() => mouseEnter(4)} onMouseLeave={() => mouseLeave(4)} className="work__block">
                        <div>
                            <h2>2023</h2>
                            <h2>ROMANS</h2>
                        </div>
                    </div>
                    <div className="work__items__image">
                        <img className='work__image' src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da33_oguz-yagiz-kara-OhC9aDrGsHU-unsplash-min.jpg" alt="#" />
                    </div>
                </a>
            </div>
            <div className="work__images">
            </div>
        </div>
    </div>
  )
}
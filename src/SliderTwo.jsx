import React, {useState} from 'react'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaWindowClose} from 'react-icons/fa'


export default function SliderTwo({setActive}) {
    const [current, setCurrent] = useState(0)
    const slides = [
        {image: 'https://assets-global.website-files.com/63dbcd1571be020634cc31f0/63e12b97eee0b0dc97922a4a_Instructions%20Image%2003.jpg'},
        {image: 'https://assets-global.website-files.com/643f03b9f767055f60e2cdc8/64483d32faaa61360c3277a1_feather-og.png'},
        {image: 'https://assets-global.website-files.com/63dbcd1571be020634cc31f0/63e12b97eee0b0dc97922a4a_Instructions%20Image%2003.jpg'}
    ]                 

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

  return (
    <div className='slider'>
        <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide}/>
        <FaWindowClose className='close' onClick={() => setActive('')}/>
        {slides.map((slide, idx) => {
                return (
                    <div className={idx == current ? 'slide active' : 'slide'} key={idx}>
                        {idx === current && (
                            <img src={slide.image} className='slide-image' alt='#'/>
                        )}
                    </div>
                )
            }
        )}
    </div>
  )
}

import React, { useState } from 'react'
import SideBar from './SideBar'
import SliderTwo from './SliderTwo'
import Help from './Help'

export default function Licensing() {
    const [active, setActive] = useState('')
  return (
    <div className='gen'>
        <SideBar />
        <div className='opposite__block'>
            <h1>LICENSING</h1>
            <div className="subtitle">
             “All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
            </div>
            <a className='title-h2' href="#">Unsplash</a>
            <div style={{marginTop: 30}} onClick={() => active == '' ? setActive('active'): setActive('')} className='picture'>
                <img style={{width: '100%'}} src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7da1e_1x1.webp" alt="#" />
            </div>
            <div className={active === '' ? 'modal' : 'modal active'}>
                <SliderTwo setActive={setActive}/>
            </div>
            <div style={{marginTop: 50}}>
                <a className='title-h2' href="#">Fathericons</a>
                <div style={{marginTop: 30}} onClick={() => active == '' ? setActive('active'): setActive('')} className='picture'>
                    <img style={{width: '100%'}} src="https://assets-global.website-files.com/646270ca8cac509e47f4febc/646270ca8cac509e47f4fef6_feather-og.png" alt="#" />
                </div>
                <div className={active === '' ? 'modal' : 'modal active'}>
                    <SliderTwo setActive={setActive}/>
                </div>
            </div>
            <Help/>
        </div>
    </div>
  )
}

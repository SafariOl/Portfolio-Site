import React, { useRef, useState} from 'react'
import SideBar from './SideBar'
import Help from './Help'
import Slider from './Slider'


export default function HelpBlock() {
    const [active, setActive] = useState('')

  return (
    <div className='gen'>
        <SideBar/>
        <div className='opposite__block'>
            <div className='span-white'>
                <h3 className='anim'>STEP-BY-STEP GUIDE</h3>
                <p><span>Welcome</span>, we understand that Webflow can be a bit<br />confusing,<span> this guide will help you get started</span>. So grab a pen<br />and paper and let's get started!</p>
            </div>
            <div style={{marginTop: 30, marginBottom: 30}}>
                <Help />
            </div>
            <h3 className='anim'>CHANGE ABOUT TEXT</h3>
            <p>1. Locate Text Line Component</p>
            <p>- Go to the Gear Icon (top right) or click "D" on your keyboard</p>
            <p>2.Change the text to whatever you want :)</p>
            <div onClick={() => active == '' ? setActive('active'): setActive('')} className='picture'>
                <img style={{width: '100%'}} src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7da1b_Instruction%20Image.webp" alt="#" />
            </div>
            <div className={active === '' ? 'modal' : 'modal active'}>
                <Slider setActive={setActive}/>
            </div>
            <section>
                <h3 className='anim'>CUSTOMIZATION ASSISTANCE</h3>
                <p>We believe in making things easy for you! Our template is designed to be user-friendly and highly customizable. You should have no trouble editing and personalizing it to suit your needs.
                    However, if you ever need assistance or have questions while working with the template, don't hesitate to reach out to us. We're here to help!
                    Email us at <span style={{color: '#fff'}}>s.olha.vit@gmail.com</span>, and our dedicated support team will be happy to assist you with any customization queries or guidance you may require.
                    Remember, your satisfaction is our priority, and we're committed to ensuring your experience with our template is smooth and successful. Happy customizing!"
                </p>
            </section>
        </div>
    </div>
  )
}

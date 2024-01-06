import React from 'react'

export default function ColorsButtons() {
  return (
    <section>
        <h3 className='anim'>COLORS & BUTTONS</h3>
        <div className="container">
            <div className="block">
                <div style={{display: 'flex', gap: 50, alignItems: 'center'}}>
                    <div>
                        <div style={{width: 54, height: 54, borderRadius: '50%', background: '#fff'}}></div>
                        <div style={{marginTop: 20, width: 54, height: 54, borderRadius: '50%', background: '#020202'}}></div>
                    </div>
                    <div className='buttons' style={{background: '#fcfcfc'}}>
                        <button>Get Started</button>
                        <button>Get Started</button>
                        <a href="#">Watch Video</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

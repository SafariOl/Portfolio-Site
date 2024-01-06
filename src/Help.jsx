import React from 'react'

export default function Help() {
  return (
    <section style={{marginTop: 0}}>
        <div style={{display: 'flex', alignItems: 'start', gap: 20}} className="container">
            <img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7d9e0_I%20Icon.svg" alt="#" />
            <div className='span-white'>
                <h5 style={{margin: 0}}>Figma file or more help?</h5>
                <p><span>If you have any questions</span> or <span>need additional assistance, please do not hesitate to reach out.</span> We are here to help and support you every step of the way. And for those who would like to take a closer look at the design, <span>we are also happy to provide a Figma file.</span> Simply send us a request and we will be happy to share it with you. Thank you for choosing</p>
            </div>
        </div>
    </section>
  )
}

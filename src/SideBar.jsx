import React, { useLayoutEffect } from 'react'


export function updateStorageItem (item){
  localStorage.removeItem('current')
  localStorage.setItem('current', item)
}

export default function SideBar() {
  useLayoutEffect(() => {
    const current= +localStorage.getItem('current')

    console.log(current)
    const links = document.querySelectorAll('.links')
    links.forEach((link, idx) => {
      if(idx == current){
        link.classList.add('active')
      }
      links.forEach((otherLink, index) => {
        if(index !== idx && index !== current){
          otherLink.classList.remove('active')
        }
      })
    })
  })

  return (
    <aside>
      <div className='side__btns'>
        <div className='back-button'>
          <a style={{display: 'flex', alignItems: 'center'}} href="/"><img style={{opacity: 1}} src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7d9e5_Back%20Icon.svg" alt="#" /><p style={{ marginLeft: 5, marginTop: 2}}>Get Back</p></a>
        </div>
        <h4>HELP CENTER</h4>
      </div>
        <ul style={{paddingLeft:20}}>
            <li className='links'><a href="/guide" onClick={() => updateStorageItem(0)}><img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7d9dc_Style%20Guide%20Icon.svg" alt="#" /><p>Style Guide</p></a></li>
            <li className='links'><a href="/help" onClick={() => updateStorageItem(1)}><img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7d9da_Home%20Icon.svg" alt="#" /><p>Help</p></a></li>
            <li className='links'><a href="/licensing" onClick={() => updateStorageItem(2)}><img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7d9ea_Flag%20Icon.svg" alt="#" /><p>Licensing</p></a></li>
            <li className='links'><a href="/log" onClick={() => updateStorageItem(3)}><img src="https://assets-global.website-files.com/65455474e0ea54684cf7da15/65455474e0ea54684cf7d9de_Loading%20Icon.svg" alt="#" /><p>Change Log</p></a></li>
        </ul>
    </aside>
  )
}

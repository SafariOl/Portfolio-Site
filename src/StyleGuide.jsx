import React, { useLayoutEffect, useRef } from 'react'
import SideBar from './SideBar'
import Help from './Help'
import ColorsButtons from './ColorsButtons'
import Paragraphs from './Paragraphs'
import GridsDivs from './GridsDivs'
import RichText from './RichText'
import Headings from './Headings'

export default function StyleGuide() {
  useLayoutEffect(() => {
    const rows = document.querySelectorAll('.row')
    rows.forEach(row => {
      const cols = row.querySelectorAll('.col')
      const colsWidth = 100 / cols.length
      cols.forEach(col => {
        col.style.width = colsWidth + '%'
      })
    })
  })


  return (
    <div className='gen'>
        <SideBar/>
        <div className='opposite__block'>
          <h1 style={{fontWeight: 700}}>STYLE GUIDE</h1>
          <div className="subtitle">A style guide is a set of standards for the writing and design<br />of content.</div>
          <Headings />
          <RichText />
          <GridsDivs />
          <Paragraphs />
          <ColorsButtons />
          <Help />
        </div>
    </div>
  )
}


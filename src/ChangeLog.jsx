import React from 'react'
import SideBar from './SideBar'
import Help from './Help'

export default function () {
  return (
    <div className='gen'>
        <SideBar />
        <div className='opposite__block'>
            <h1>CHANGE LOG</h1>
            <div style={{color: '#646362'}} className="subtitle">A change log is a document or file that records and maintains a history of changes made to a software, application, or system.</div>
            <div style={{display: 'flex', gap: 30, flexWrap: 'wrap'}}>
                <div className='container version'>
                    <h2 style={{margin: 0}}>V 1.0</h2>
                    <h4 style={{margin: 0}}>2024</h4>
                    <p>Release</p>
                </div>
                <Help />
            </div>
        </div>
    </div>
  )
}

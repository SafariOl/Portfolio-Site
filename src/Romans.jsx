import React from 'react'
import WorkPageText from './WorkPageText'
import Work from './Work'

export default function Romans() {
  return (
    <div>
        <div className='work-page'>
            <div className="work-page__image">
                <img src="https://assets-global.website-files.com/65455474e0ea54684cf7d9cf/65455474e0ea54684cf7da33_oguz-yagiz-kara-OhC9aDrGsHU-unsplash-min.jpg" alt="#" />
            </div>
            <div>
                <h2>Romans</h2>
                <p>Et recusandae qui quia sed necessitatibus placeat sed quia sit. Sint praesentium eos necessitatibus debitis porro mi.Earum nihil quam veniam.Iusto et et quaerat eos voluptatem qui repellendus sed.Unde rerum aut sit suscipit.Et ut nobis occ</p>
                <div className='work-page__columns'>
                    <div><h3>Client</h3><p>Figma</p></div>
                    <div><h3>Service</h3><p>UI/UX<br />Service design<br />Visual design</p></div>
                    <div><h3>Category</h3><p>Technology</p></div>
                </div>
            </div>
        </div>
        <WorkPageText />
        <Work titlePage={'Other Works'} elem={4}/>
    </div>
  )
}

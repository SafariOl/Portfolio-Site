import React from 'react'


export default function RichText() {

  return (
    <section>
        <h3 className='rich-anim'>RICH TEXT</h3>
        <div className="container">
            <div className="block">
                <h2>What’s a Rich Text element?</h2>
                <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                <h3>Static and dynamic content editing</h3>
                <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                <h4>How to customize formatting for each rich text</h4>
                <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                <ul style={{listStyle: 'inherit'}}>
                    <li>Bullet list 01</li>
                    <li>Bullet list 02</li>
                    <li>Bullet list 03</li>
                </ul>
                <ol>
                    <li>Number List 01</li>
                    <li>Number List 02</li>
                    <li>Number List 03</li>
                </ol>
                <blockquote>
                    Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.
                </blockquote>
                <img style={{maxWidth: 407, transform: 'translateX(-50%)', position: 'relative', left: '50%'}} src="https://assets-global.website-files.com/646270ca8cac509e47f4febc/646270ca8cac509e47f4fef2_Blog%20Image%2005.jpg" alt="#" />
                <figcaption style={{textAlign: 'center', marginBottom: 50}}>CAPTION</figcaption>
            </div>
        </div>
    </section>
  )
}

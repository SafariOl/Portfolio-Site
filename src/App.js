import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import Main from './Main'
import StyleGuide from './StyleGuide'
import HelpBlock from './HelpBlock'
import Licensing from './Licensing'
import ChangeLog from './ChangeLog'
import FeelingY from './FeelingY'
import Marcomit from './Marcomit'
import RonBusti from './RonBusti'
import Cereal from './Cereal'
import Romans from './Romans'

export default function App() {
  
  return (
    <>
      <NavBar />
      <Router>
          <Routes>
            <Route exact path='/' Component={Main}/>
            <Route exact path='/guide' Component={StyleGuide}/>
            <Route exact path='/help' Component={HelpBlock}/>
            <Route exact path='/licensing' Component={Licensing}/>
            <Route exact path='/log' Component={ChangeLog}/>
            <Route exact path='/feeling' Component={FeelingY}/>
            <Route exact path='/marcomit' Component={Marcomit}/>
            <Route exact path='/ron-busti' Component={RonBusti}/>
            <Route exact path='/cereal' Component={Cereal}/>
            <Route exact path='/romans' Component={Romans}/>
          </Routes>
        </Router>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

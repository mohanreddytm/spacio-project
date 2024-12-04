import Header from "./components/Header";

import image1 from './one/image1.png'

import { CgArrowTopRight } from "react-icons/cg";

import { IoChevronForward } from "react-icons/io5";

import { FaRegCopyright } from "react-icons/fa";

import './App.css'


const App = () => {

  
  const backgroundStyle = {
    backgroundImage: `url(${image1})`,

  }

  return(
  <div className="app-initial-cont">
    <Header />
    <div style={backgroundStyle} className="book-appointment-cont">
        <div className="book-appointment-top-cont">
          <IoChevronForward />
          <div>
            <h1>Simplifying <span>facades</span> from <span>conception to construction</span> using custom-programmed digitak tools </h1>
            <button>BOOK AN APPOINTMENT <CgArrowTopRight /></button>
          </div>
        
        </div>
        <div>
          <FaRegCopyright />
          <p>SPACIO TECHTONICS | all rights reserved</p>
        </div>
      </div>
  </div>
)
}
export default App
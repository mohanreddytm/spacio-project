import Header from "./components/Header";

import image1 from './one/image1.png'

import SpacioTechTonics from './one/Spacio TechTonics Consultancy V21.png'

import { CgArrowTopRight } from "react-icons/cg";



import { IoChevronForward } from "react-icons/io5";

import { FaRegCopyright,FaChevronLeft,FaChevronRight } from "react-icons/fa";

import './App.css'


const App = () => {

  const backgroundStyle = {
    position: 'relative',
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display:'flex',
    flexDirection:'column',    

    justifyContent: 'center',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    zIndex: 1,
  };

  const facadeIntitalCont = {
    backgroundImage: `url(${SpacioTechTonics})`,    
    backgroundSize: 'cover',
  
    height:'100vh',
  };

  console.log(SpacioTechTonics)


  return(
  <div className="app-initial-cont">
    <Header />
    <div style={backgroundStyle} className="books-app-css-style">
      <div style={overlayStyle}>
        <div className="book-appointment-top-cont">
          <FaChevronRight className="forward-arrow-book-app" />
          <div>
            <h1 className="book-appointment-main-heading">Simplifying <span className="book-app-span-one">facades</span> from <span className="book-app-span-one book-app-span-two">conception to construction</span> using custom-programmed digitak tools </h1>
            <button className="book-app-button">BOOK AN APPOINTMENT <CgArrowTopRight className="book-app-button-arrow" /></button>
          </div>
        
        </div>
        <div className="book-app-bottom-cont">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
        </div>
    </div>
    <div className="spacio-tech-initial-cont">
      <div className="spacio-tech-main-cont">
        <div className="spcaio-tech-left-cont">
          <h1 className="spacio-tech-main-heading">We are <br /> Spacio Techtonics</h1>
          <div className="spacio-tech-button-cont">
            <p className="spacio-tech-button-content">MORE ON YOUR <br /> EXPERTISE</p>
            <CgArrowTopRight className="spacio-tech-arrow" />
            </div>
        </div>
        <div className="content-of-spacio-tech-cont">
          <p className="content-of-spacio-tech">Innovation and technology should make life simple—not the other way around.</p>
          <p className="content-of-spacio-tech">We built Spacio Techtonics to help architects and engineers build their dreams and realise them with <spam className="book-app-span-one book-app-span-two">custom - programmed digital tools.</spam></p>
          <p className="content-of-spacio-tech">With diverse backgrounds of engineers with professional experience and projects across India, we offer <spam className="book-app-span-one book-app-span-two">facade architecture , engineering and advisory services</spam> </p>
          <p className="content-of-spacio-tech">to you to realise your dreams with confidence</p>
          <p className="content-of-spacio-tech more-specify-spacio-tech">Make your dreams grow with innovation that flows.
          </p>

        </div>
        
      </div>
      <div className="book-app-bottom-cont spacio-tech-copy-one">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>

    </div>
    <div className="facade-initial-cont">
      <div className="facade-main-cont">
        <div className="facade-arrows-container">
          <FaChevronLeft className="facade-arrow" />
          <FaChevronRight className="facade-arrow" />
        </div>
        <h1 className="facade-heading">Exceptional <br /> facades delivered</h1>
        <div className="book-app-bottom-cont spacio-tech-copy-one facade-copy-right">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
      </div>
    </div>
  </div>
)
}
export default App
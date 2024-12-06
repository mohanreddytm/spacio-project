import Header from "./components/Header";

import favicon from './one/favicon.ico'

import { IoMdMenu } from "react-icons/io";

import screenshot from './one/Screenshot 2024-12-06 090252.png'

import image1 from './one/image1.png'

import SpacioTechTonics from './one/Spacio TechTonics Consultancy V21.png'

import { CgArrowTopRight } from "react-icons/cg";

import { FaPhone } from "react-icons/fa6";

import map from './one/map.png'

import { RxArrowTopRight } from "react-icons/rx";

import { FaInstagram, FaYoutube ,FaLinkedin  } from "react-icons/fa";

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


  };

  const redStyleOne = {
    backgroundImage: `url(${screenshot})`,
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display:'flex',
    flexDirection:'column',    
    justifyContent:'space-between',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    zIndex: 1,
  };

  const facadeIntitalCont = {
    backgroundImage: `url(${SpacioTechTonics})`,    
    backgroundSize: 'cover',
  
    height:'100vh',
  };

  const workImageStyle = {
    backgroundImage: `url(${image1})`,
  }

  const workImageTwoStyle = {
    backgroundImage: `url(${image1})`,
  }

  const onStyleTouch = {
    
    backgroundColor: 'rgba(255, 255, 255, -0.1)', 
    backgroundStyle:'cover',
    zIndex: 1,
  }

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
        <div className="book-app-bottom-cont mmm">
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
          <p className="content-of-spacio-tech">We built Spacio Techtonics to help architects and engineers build their dreams and realise them with <span className="book-app-span-one book-app-span-two">custom - programmed digital tools.</span></p>
          <p className="content-of-spacio-tech">With diverse backgrounds of engineers with professional experience and projects across India, we offer <span className="book-app-span-one book-app-span-two">facade architecture , engineering and advisory services</span> </p>
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
    <div style={redStyleOne} className="facade-initial-cont">
      <div className="facade-main-cont">
        <div className="facade-arrows-container">
          <FaChevronLeft className="facade-arrow" />
          <FaChevronRight className="facade-arrow" />
        </div>
        <h1 className="facade-heading">Exceptional <br /> facades delivered</h1>
        <div className="book-app-bottom-cont spacio-tech-copy-one facade-copy">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
      </div>
    </div>
    <div className="map-initital-cont">
      <div className="map-main-cont">
        <div className="map-content-cont">
          <h1 className="map-main-head">Our presence</h1>
          <p className="map-main-para">We have our footprint throughout India and have work going on in the leading cities of India - </p>
          <ul className="map-list-cont">
            <li className="city-names-map">Delhi</li>
            <li className="city-names-map">Mumbai</li>
            <li className="city-names-map">Hyderabad</li>
            <li className="city-names-map">Bengaluru</li>
            <li className="city-names-map">Coimbatore</li>
            <li className="city-names-map">Chennai</li>
          </ul>
          <div className="map-button-main-cont">
            <div className="map-button-sub-cont">
              <h1 className="map-button-main-head">100000</h1>
              <div className="map-button-hiper-sub-cont">
                <p className="map-button-content">SQFT. OF FACADE BUILD SO FAR</p>
                <CgArrowTopRight className="map-button-arrow" />
              </div>
            </div>
            <div className="map-button-sub-cont">
              <h1 className="map-button-main-head">6+</h1>
              <div className="map-button-hiper-sub-cont">
                <p className="map-button-content">CITIES WITH ACTIVE PROJECTS</p>
                <CgArrowTopRight className="map-button-arrow" />
              </div>
            </div>
            <div className="map-button-sub-cont">
              <h1 className="map-button-main-head">6+</h1>
              <div className="map-button-hiper-sub-cont">
                <p className="map-button-content">CITIES WITH ACTIVE PROJECTS</p>
                <CgArrowTopRight className="map-button-arrow" />
              </div>
            </div>
            
          </div>
        </div>
        <img className="map-image" src={map} alt='map' />
      </div>
      <div className="book-app-bottom-cont mmm">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
    </div>
    <div className="work-initital-cont">
      <div className="work-cont-one">
        <h1 className="spacio-tech-main-heading">Latest Work</h1>
        <div className="work-cont-one-right-cont">
          <p className="work-cont-one-right-cont-para">VIEW ALL</p>
          <RxArrowTopRight className="work-cont-one-right-cont-arrow" />
        </div>
      </div>
      <div className="work-image-cont">
        <div style={workImageStyle} className="work-image-cont-one">
          <FaChevronLeft className="work-image-cont-arrow" />
        </div>
        <div style={workImageTwoStyle} className="work-image-cont-two">
          <FaChevronRight className="work-image-cont-arrow" />
        </div>
      </div>
      <div className="work-location-cont">
        <div className="work-location-left-cont">
          <p className="work-locaiont-content">MARBLED,DELHI </p>
          <RxArrowTopRight className="work-location-left-arrow" />
        </div>
        <div className="work-location-left-cont">
          <p className="work-locaiont-content">HOSPICE,COINBATORE</p>
           <RxArrowTopRight className="work-location-left-arrow" />
        </div>
      </div>
      <div className="insights-copy-cont">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
    </div>
    <div className="insights-initial-cont">
      <h1 className="spacio-tech-main-heading">Insights</h1>
      <div className="insights-main-cont">
        <FaChevronLeft className="insigths-arrow" />
        <div className="insights-sub-cont">
          <div className="insights-in-cont">
            <h1 className="insights-in-one">in</h1>
          </div>
          <p className="insights-content">Our director has recieved the ‘Top AEC Industry Voice’  on LinkedIN</p>
          <p className="insights-date">2024-06-01</p>
        </div>
        <div className="insights-sub-cont">
          <div className="insights-in-cont">
            <h1 className="insights-in-one">in</h1>
          </div>
          <p className="insights-content">Our director has recieved the ‘Top AEC Industry Voice’  on LinkedIN</p>
          <p className="insights-date">2024-06-01</p>
        </div>
        <div className="insights-sub-cont">
          <div className="insights-in-cont">
            <h1 className="insights-in-one">in</h1>
          </div>
          <p className="insights-content">Our director has recieved the ‘Top AEC Industry Voice’  on LinkedIN</p>
          <p className="insights-date">2024-06-01</p>
        </div>
        <FaChevronRight className="insigths-arrow" />
      </div>
      <div className="insights-copy-cont">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
    </div>
    <div className='touch-initial-cont'>
      <div style={onStyleTouch} className='touch-main-cont'>
        <div className='touch-header-cont'>
          <div className='header-logo-cont touch-additional-header'>
            <img className='header-logo' src={favicon} alt='logo' />
            <div className='header-logo-name-cont'>
                <div>
                    <h1 className='header-logo-name mx'>SPACIO</h1>
                    <h1 className='header-logo-name mx'>TECHTONICS</h1>
                </div>

                <p className='header-logo-name-brand'>TM</p>

            </div>
          </div>
            <div className="touch-header-right-cont">
              <p className="touch-header-para">projects</p>
              <p className="touch-header-para">services</p>
              <p className="touch-header-para">careers</p>
              <p className="touch-header-para">contact</p>
              <IoMdMenu className='touch-menu' />
            </div>
        </div>
        <h1 className='touch-main-head'>Innovate with us</h1>
        <p className='touch-main-para'>contact@spaciotechtonics.info</p>
        <p className='touch-main-para'>+91 94863 19871</p>
        <p className='touch-main-para touch-main-margin'>If  you’re looking for a career with us <span className="click-here-style">click here</span>  to apply</p>
        <div className="touch-side-cont">
          <h1 className='touch-side-head'>Keep in touch</h1>
          <p className='touch-side-para'>to get updates and get contacted by us</p>
        </div>
        <div className="touch-bottom-cont">
          <div className="touch-bottom-left-cont">
            <p className="touch-bottom-left-head">GET SOCIAL</p>
            <FaInstagram className="touch-bottom-logo" />
            <FaYoutube className="touch-bottom-logo" />
            <FaLinkedin className="touch-bottom-logo" />
          </div>
          <div className="touch-bottom-right-cont">
            <input text='text' className="touch-bottom-right-input" placeholder="EMAIL ADRESS" />
            <button className="touch-bottom-right-button">SIGH UP <CgArrowTopRight className="touch-bottom-arrow"  /></button>
          </div>
        </div>
        <div className="insights-copy-cont touch-copy">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
      </div>
    </div>
    <div className="final-initial-cont">
      <div className="final-first-cont">
        <div className='final-logo-cont touch-additional-header'>
          <img className='final-logo' src={favicon} alt='logo' />
          <div className='final-logo-name-cont'>
              <div>
                  <h1 className='final-logo-name mx'>SPACIO</h1>
                  <h1 className='final-logo-name mx'>TECHTONICS</h1>
              </div>

              <p className='final-logo-name-brand'>TM</p>

          </div>
        </div>
        <div className="insights-copy-cont touch-copy">
          <FaRegCopyright className="copy-right-one" />
          <p className="copy-right-content">SPACIO TECHTONICS | all rights reserved</p>
        </div>
      </div>
      <div className="final-middle-cont">
        <h1 className="final-middle-head">Company Links</h1>
        <p className="final-middle-para">Privacy Policy</p>
        <p className="final-middle-para">Terms & Conditions</p>
        <p className="final-middle-para">Contact Us</p>
      </div>
      <div className="final-last-cont">
        <h1 className="final-last-content">CALL US <FaPhone className="final-last-img" /> </h1>
      </div>
    </div>
    <div className="terms-cont">
      <h1 className="terms-one">Terms & Support</h1>
      <h1 className="terms-two">Designed with Canvo</h1>
    </div>
  </div>
)
}

export default App
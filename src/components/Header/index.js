import favicon from '../../one/favicon.ico'

import { IoMdMenu } from "react-icons/io";

import './index.css';


const Header = () => (
    <div className='header-initial-cont'>
        <div className='header-main-cont'>
            <div className='header-logo-cont'>
                <img className='header-logo' src={favicon} alt='logo' />
                <div className='header-logo-name-cont'>
                    <div>
                        <h1 className='header-logo-name'>SPACIO</h1>
                        <h1 className='header-logo-name'>TECHTONICS</h1>
                    </div>

                    <p className='header-logo-name-brand'>TM</p>

                </div>
            </div>
            <div className='header-right-cont'>
                <h1 className='header-right-cont-head'>OUR WORK</h1>
                <h1 className='header-right-cont-head'>WHY US?</h1>
                <button type='button' className='header-right-cont-button'>BOOD AN APPOINTMENT</button>
                <IoMdMenu className='header-right-cont-menu' />
            </div>
        </div>
    </div>
)
export default Header
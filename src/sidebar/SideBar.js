import React, { useState } from 'react'
import "./sidebar.css";
import MainContent from '../mainContaint/MainContent';
import Navbar from '../navBar/Navbar';
import { BsNut } from 'react-icons/bs';
import { PiKey } from "react-icons/pi";
import { BiCube } from "react-icons/bi";
import { FaRegUserCircle } from 'react-icons/fa'
import { FaWallet } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../footer/Footer';
import profile from '../logo/profile.jpg'
import { IoIosArrowDown } from 'react-icons/io'
const SideBar = (props) => {
    const [activeState, setactiveState] = useState('dashboard')
    const activeChange = (e) => {
        setactiveState(e)
    }
    console.log('==========', activeState);
    return (
        <>
            <div className="sidebar">
                <div>
                    <div className="d-flex text-light p-4"><h4 className='h5'><BsNut />&nbsp;&nbsp;Dashboard</h4></div>
                    <a className={activeState === 'dashboard' && 'active'} onClick={() => activeChange('dashboard')} href="#home"><PiKey />&nbsp;&nbsp;Dashboard</a>
                    <a href="#news" className={activeState === 'product' && 'active'} onClick={() => activeChange('product')}><BiCube />&nbsp; &nbsp;Product<ChevronRightIcon className='iconClass' /></a>
                    <a href="#contact" className={activeState === 'customers' && 'active'} onClick={() => activeChange('customers')}><FaRegUserCircle />&nbsp; &nbsp;Customers<ChevronRightIcon className='iconClass1' /></a>
                    <a href="#about" className={activeState === 'income' && 'active'} onClick={() => activeChange('income')}><FaWallet />&nbsp; &nbsp;Income<ChevronRightIcon className='iconClass2' /></a>
                    <a href="#about" className={activeState === 'promote' && 'active'} onClick={() => activeChange('promote')}><TbDiscount2 />&nbsp; &nbsp;Promote<ChevronRightIcon className='iconClass3' /></a>
                    <a href="#about" className={activeState === 'help' && 'active'} onClick={() => activeChange('help')}><BiHelpCircle />&nbsp; &nbsp;Help<ChevronRightIcon className='iconClass4' /></a>

                </div>
                <div>

                    <div className="d-flex justify-content-arround web">
                        <div>
                            <img src={profile} alt="Profile" className="profile-image" />
                        </div>
                        <div className="user-info ">
                            <h6 className='text-light'>Soubhagya</h6>
                            <span className="text-secondary">Developer</span>
                        </div>
                        <div>
                            <IoIosArrowDown className='text-light' />
                        </div>
                    </div>
                </div>

                {/* <div className="profile-section">
                </div> */}
            </div>

            <Navbar />

            <MainContent />
            <Footer />


        </>


    )
}

export default SideBar
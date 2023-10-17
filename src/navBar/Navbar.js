import React from 'react'
import './navBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, InputBase, alpha, styled } from '@mui/material';
import dolar from '../logo/dolar.jpg'
import store from "../logo/store.jpg";
import task from "../logo/task.jpg";
import wallet from "../logo/wallet.jpg";
const Navbar = (props) => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'red',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <div className=' header'>
            <div className="row justify-content-between mt-3">
                <div className=" col-6">
                    <h2 className="h6">Hello Soubhagya👋🏻,</h2>
                </div>
                <div className="col-3">
                    <AppBar position="static">
                        <Search >
                            <SearchIconWrapper>

                                <SearchIcon className='color'/>
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
                            {/* <input type="search" /> */}
                        </Search>
                    </AppBar>
                    {/* <form class="form-inline ">
                        
                        <input  class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form> */}
                    {/* <input type="search" name="" id="" /> */}
                </div>
            </div>
            <div className=" row justify-content-between my-4">
                <div className=" col-lg-3 col-md-6 col-sm-12  ">
                    <div className="d-flex second-content
                    flex-column flex-md-row
                     justify-content-around  align-items-center">
                        <div className="dolar">
                            <img className='img img-fluid' src={dolar} alt="" />
                        </div>
                        <div className="earn text-center text-md-left">
                            <span className='text-secondary a'>Earning</span><br />
                            <span className='b'>$198k</span>
                            <p className='last'><span className='arrow'> &#8593;37.8%</span> this month</p>
                        </div>
                    </div>

                </div>
                <div className=" col-lg-3 col-md-6 col-sm-12  ">
                    <div className="d-flex second-content
                    flex-column flex-md-row
                     justify-content-around  align-items-center">
                        <div className="dolar">
                            <img className='img img-fluid' src={task} alt="" />
                        </div>
                        <div className="earn text-center text-md-left">
                            <span className='text-secondary a'>Order</span><br />
                            <span className='b'>$2.4k</span>
                            <p className='last'><span className='text-danger'> &darr;2%</span> this month</p>
                        </div>
                    </div>

                </div>
                <div className=" col-lg-3 col-md-6 col-sm-12  ">
                    <div className="d-flex second-content
                    flex-column flex-md-row
                     justify-content-around  align-items-center">
                        <div className="dolar">
                            <img className='img img-fluid' src={wallet} alt="" />
                        </div>
                        <div className="earn text-center text-md-left">
                            <span className='text-secondary a'>Balance</span><br />
                            <span className='b'>$2.4k</span>
                            <p className='last'><span className='text-danger'> &darr;2%</span> this month</p>
                        </div>
                    </div>

                </div>
                <div className=" col-lg-3 col-md-6 col-sm-12  ">
                    <div className="d-flex second-content
                    flex-column flex-md-row
                     justify-content-around  align-items-center">
                        <div className="dolar">
                            <img className='img img-fluid' src={store} alt="" />
                        </div>
                        <div className="earn text-center text-md-left">
                            <span className='text-secondary a'>Total sales</span><br />
                            <span className='b'>$89k</span>
                            <p className='last'><span className='arrow'> &#8593;11%</span> this month</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
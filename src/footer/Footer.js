import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Abstract from '../logo/Abstract.jpg';
import sarphnes from '../logo/sarphnes.jpg'
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function Footer(props) {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
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
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <div className="header mt-5">
            <div style={{ backgroundColor: 'white', borderTopRightRadius: '8px', borderTopLeftRadius: '8px' }}>
                <div className="row">
                    <div className='mt-4 col-8 col-sm-8 col-md-8 col-lg-8'>
                        <span style={{ fontSize: '130%', fontWeight: 'bold', marginLeft: '1vw' }}>Product Sell</span>
                    </div>

                    <div className='col-2 col-sm-2 col-md-2 col-lg-2 mt-4'>
                        <Box style={{ backgroundColor: "rgba(242,239,255,255)", borderRadius: '5px', width: '112%', marginLeft: 'auto',height:'90%'}}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                    </div>

                    <div className="select-container col-2 col-sm-2 col-md-2 col-lg-2 mt-4 " >
                        <div className="custom-select">
                            <div className="custom-select-wrapper" style={{ marginRight: '2vw' }}>
                                <select name="choose" id="mySelect" className="form-select" style={{ backgroundColor: "rgba(242,239,255,255)",border:'none' }}>
                                    <option value="Last 30 days">Last 30 days</option>
                                    <option value="Last 7 days">Last 7 days</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TableContainer component={Paper} style={{ borderTopRightRadius: '0px', borderTopLeftRadius: '0px' }}>
                <Table sx={{ minWidth: 450 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='text-secondary'>Product Name</TableCell>
                            <TableCell align="right" style={{ width: '20%' }}>Stock</TableCell>
                            <TableCell align="right" style={{ width: '20%' }}>Price</TableCell>
                            <TableCell align="right" style={{ width: '20%' }}>Total Sales</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow >
                            <TableCell component="th" scope="row">
                                <div className="d-flex">
                                    <div><img src={Abstract} alt="" /></div>
                                    <div style={{ paddingLeft: "1vw" }}><span style={{ fontSize: "130%", fontWeight: 600, }}>Abstract 3D</span><br />
                                        <span style={{ fontSize: "80%" }} className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></div>
                                </div>

                            </TableCell>
                            <TableCell align="right" style={{ width: '20%' }} className='text-secondary'>32 in stock</TableCell>
                            <TableCell align="right" style={{ width: '20%' }}><b> $ 45.99</b></TableCell>
                            <TableCell align="right" style={{ width: '20%' }} className='text-secondary'>20</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                <div className="d-flex">
                                    <div><img src={sarphnes} alt="" /></div>
                                    <div style={{ paddingLeft: "1vw" }}><span style={{ fontSize: "130%", fontWeight: 600 }}>Sarphnes illustration</span><br />
                                        <span style={{ fontSize: "80%" }} className='text-secondary' F>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></div>
                                </div>

                            </TableCell>
                            <TableCell align="right" style={{ width: '20%' }} className='text-secondary'>32 in stock</TableCell>
                            <TableCell align="right" style={{ width: '20%' }}><b> $ 45.99</b></TableCell>
                            <TableCell align="right" style={{ width: '20%' }} className='text-secondary'>20</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

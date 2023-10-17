import React, { Component } from "react";
import "./mainContent.css";
import Main from "../Main";
import piechart from '../logo/piechart.jpg'
const MainContent = (props) => {
  return (
    <div className="container middle header">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <Main />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <img className='img-fluid pichart' src={piechart} alt="" />
        </div>
      </div>
    </div>

  )
}
export default MainContent;

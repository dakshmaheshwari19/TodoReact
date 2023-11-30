import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div style={{backgroundColor:"red",color:"black"}}>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:"black",color:"black"}}>
      <Link className="navbar-brand"  to="/">{props.title}</Link>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"black"}}>
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item active">
            <Link className="nav-link"  to="/" style={{backgroundColor:"black"}} >Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/about" style={{backgroundColor:"black"}}>About</Link>
          </li>
          
          
        </ul>
        {props.searchbar? <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> : ""}
      </div>
    </nav>

    </div>
  )
}

Header.defaultProps={
title: "your title here",
searchBar: true
}

Header.propTypes={
    title : PropTypes.string,
    searchBar :PropTypes.bool.isRequired

}
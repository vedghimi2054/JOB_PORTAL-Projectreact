import React from 'react'
import { NavLink } from 'react-router-dom'
const GuestView = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }
  const fetching = JSON.parse(localStorage.getItem('user'));
  var role = "null";
  if (fetching) {
    role = fetching.user.role[0].roleName;
  }
  return (
    role === 'null' && (
      <>
        <li className="nav-item ">
          <i className="fa-solid fa-house text-light"></i>
          <NavLink className="nav-link active text-light d-inline p-0 " style={navLinkStyles} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-md-3">
          <i className="fa-solid fa-users text-light"></i>
          <NavLink className="nav-link text-light d-inline" to="/latestjob" style={navLinkStyles}>Latest Job</NavLink>
        </li>
        <li className="nav-item mx-md-3">
          <i className="fa fa-user text-light"></i>
          <NavLink className="nav-link text-light d-inline" to="/login" style={navLinkStyles}>Login</NavLink>
        </li>
        <li className="nav-item mx-md-3">
          <i className="fa-solid fa-users text-light"></i>
          <NavLink className="nav-link text-light d-inline" to="/signup" style={navLinkStyles}>Register</NavLink>
        </li>
      </>
    )
  )
}

export default GuestView
import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/todo'>To-Do-List</Link>&nbsp;&nbsp;
      
    </>
  )
}

export default Header

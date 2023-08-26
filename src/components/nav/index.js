import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
        <Link to= "/orders" > order History </Link>
        &nbsp; | &nbsp;
        <Link to= "/orders/new" > New Order </Link>
        <Link to= "/orders" > order History</Link>

   </nav>
  )
}
export default NavBar;
import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

// import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
    return (
        
         <Fragment>
        {/* <Nav className="bg-dark">
            <h1>
            <NavItem>
              <Link to="/">Devconnector</Link>
           </NavItem>
            </h1>
            <NavItem>
              <NavLink href="#">Developers</NavLink>
           </NavItem>
           <NavItem>
              <Link to="/register">Register</Link>
           </NavItem>
           <NavItem>
              <Link to="/login">Login</Link>
           </NavItem>
        </Nav> */}

<nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
       <h3 className="mr-10">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Devconnector <span class="sr-only">(current)</span></Link>
      </li></h3>
      <li class="nav-item">
        <Link to="/register" class="nav-link">Register</Link>
      </li>
      
      <li class="nav-item">
        <Link to="/login" class="nav-link" >Login</Link>
      </li>
    </ul>
    
  </div>
</nav>
</Fragment>   
    )
}

export default Navbar

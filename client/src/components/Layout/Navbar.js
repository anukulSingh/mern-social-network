import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth'

// import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
const authLinks = (
  <a onClick={logout} href="#!">Logout</a>
);

const guestLinks = (
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
)

return (
        
 <Fragment>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

{!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>) }  
</nav>
</Fragment>   
    )
}

Navbar.PropTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)

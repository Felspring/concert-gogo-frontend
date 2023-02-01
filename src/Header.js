import './Header.css';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    return (
      <>
      <h3 className='metal linear'>CONCERT-GOGO</h3>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <Navbar.Brand>CONCERT-GOGO</Navbar.Brand> */}
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        <NavItem><Link to="/Search" className="nav-link">Search</Link></NavItem>
        <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        <NavItem><Link to="/Admin" className="nav-link">Admin</Link></NavItem>

        {/* {this.props.auth0.isAuthenticated && this.props.auth0.user.isAdmin == 'true'
          ?
          <NavItem><Link to="/Admin" className="nav-link">Admin</Link></NavItem>
          : null
        } */}

        <NavItem><Link to="/Home" className="nav-link">Home</Link></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);

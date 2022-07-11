import React from 'react'
import { Container, FormControl, NavDropdown , Nav, Form, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../actions/userActions';

const Header = ({setSearch}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler =() =>{
    dispatch(logout())
    navigate('/')
  }
  return (
    <Navbar bg="primary" expand="lg" variant ="dark">
  <Container>
    <Navbar.Brand >
      <Link to="/">
        Tools Crib
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className='m-auto'>
    <Form inline>
      <FormControl type="text" placeholder='Search' className='me-2' onChange = {(e) => setSearch(e.target.value)} ></FormControl>

    </Form>
    </Nav>

      {userInfo?
        <Nav className="me-auto">
      <Nav.Link href="/mynotes">My Notes</Nav.Link>
        
          

        
        <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
          
          
          
          <NavDropdown.Divider />
          <NavDropdown.Item 
          onClick={logoutHandler}
          >Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>:<Nav>
      {""}
      <Nav.Link href="/login"> LOGIN </Nav.Link>
      </Nav>}
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header


























































// import React, { useEffect } from "react";
// import {
//   Container,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import {} from "react-router-dom";
// import { logout } from "../actions/userActions";

// function Header({ setSearch }) {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   useEffect(() => {}, [userInfo]);

//   return (
//     <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">Note Zipper</Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="m-auto">
//             {userInfo && (
//               <Form inline>
//                 <FormControl
//                   type="text"
//                   placeholder="Search"
//                   className="mr-sm-2"
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </Form>
//             )}
//           </Nav>
//           <Nav>
//             {userInfo ? (
//               <>
//                 <Nav.Link href="/mynotes">My Notes</Nav.Link>
//                 <NavDropdown
//                   title={`${userInfo.name}`}
//                   id="collasible-nav-dropdown"
//                 >
//                   <NavDropdown.Item href="/profile">
//                     {/* <img
//                       alt=""
//                       src={`${userInfo.pic}`}
//                       width="25"
//                       height="25"
//                       style={{ marginRight: 10 }}
//                     /> */}
//                     My Profile
//                   </NavDropdown.Item>

//                   <NavDropdown.Divider />
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             ) : (
//               <Nav.Link href="/login">Login</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
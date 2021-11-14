import React from 'react';
import './Header.css'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
   
    const {user, logout, admin} = useAuth()

    const activeStyle={
        fontWeight: "bold", 
        color: "#dd4026",  
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",  
        padding: "8px 20px"
    };

    return (
        <>
            <div className="top-bar fluid align-items-center pb-2 pt-2 w-100">
                <Row className="fluid m-auto align-items-center container w-100 ">
                    <Col className="d-none d-sm-none d-md-flex d-lg-flex d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>                       
                        
                    </Col>
                    <Col className=" d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>

                        <Navbar.Text className="text-end">
                            { user?.email && 
                                <>
                                    {user?.photoURL? <img className="profile-img" src={user?.photoURL} alt="" /> :
                                    <img className="user-photo-default" src= "https://i.ibb.co/3sHw2zQ/user-img.png "alt="" />}

                                    {user?.displayName? <Link to= "/login" className="profile-name py-0 my-0 ">{user?.displayName}</Link> :
                                    <>
                                        <Link to= "/login" className="profile-name py-0 my-0 ">User</Link>
                                    </>}
                                </>
                            }
                        </Navbar.Text>
                        
                        {user?.email? 
                            <Button className="logout-btn text-light my-2 ms-4" onClick={logout} variant="">LogOut</Button>:
                            <NavLink
                            className="menu-text text-light"
                            activeStyle={activeStyle} to="/login"><i className="far fa-user pe-2 signIn-hr1"></i>Login
                            </NavLink>
                        }                 
                    </Col>
                </Row>
            </div>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" className="fluid header-navbar ">
                <Container>
                <NavLink to="/home" activeStyle={{textDecoration:'none'}}>
                    <Navbar.Brand href="/home" className="d-flex">
                            <NavLink to="/home" ><img
                                src="https://i.ibb.co/w6Cn1ww/necklace-logo-removebg-preview.png"
                                width="150"
                                height="50"
                                className="w-100"
                                alt="React Bootstrap logo"
                            /> </NavLink>{' '}
                            <h2 className="w-100 text-decoration-none text-dark p-1">necklace</h2>
                        </Navbar.Brand>
                        </NavLink>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                                                
                            <NavLink className="menu-text"
                                activeStyle={activeStyle} to="/home">Home
                            </NavLink>
                            <NavLink className="menu-text"
                                activeStyle={activeStyle} to="/productPage">Products
                            </NavLink>

                            {admin && 

                                <NavLink className="menu-text"
                                    activeStyle={activeStyle} to="/adminDashBoard">Admin DashBoard
                                </NavLink>

                            } 

                            {user?.email &&
                            
                                <NavLink className="menu-text"
                                activeStyle={activeStyle} to="/userDashBoard">User DashBoard
                                </NavLink>
                            }

                            <NavLink
                            className="menu-text"
                            activeStyle={activeStyle}
                            as={Link}to="/aboutUs">About Us</NavLink>

                        <Navbar.Text className="menu-text">
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
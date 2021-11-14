import React, { useState } from 'react';
import './Login.css'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <div className="mh-100">
                <div className="login-section d-flex justify-content-center align-items-center mh-100">
                    <Row className=" w-100 m-auto align-items-center d-flex justify-content-center my-5">
                        <Col xs={12} md={10} lg={5} className="d-flex justify-content-center align-items-center bg-color-gray bg-color-gray:hover d-lg-block d-md-none d-sm-none d-none first-column text-light text-start p-5 ">
                            <div className="d-grid align-items-center ">
                                <div>
                                    <h2 className="pt-2">Google SignIn</h2>
                                    <hr className="w-25 mt-3 mb-1 signIn-hr1"/>
                                </div>
                                <div>
                                    <button onClick={handleGoogleSignIn} className="px-5 py-2 border-0 fs-4 fw-bold w-50 mb-5 mt-3 bg-color-orange">Google</button>
                                </div>
                                <div className="pt-3">
                                    <span className="pt-5 fs-6">New on necklace? Please SignUp - <i className="fas fa-arrow-down"></i></span>
                                   <Link to="/signUp"><button className="py-2 border-2 card-border fs-4 fw-bold w-50 mt-4 bg-transparent text-light">SingUp</button></Link>
                                </div>
                            </div>
                        </Col>
                        {/* ------------------Login Form------------------- */}
                        <Col xs={12} md={10} lg={5} className=" d-grid bg-light align-items-center text-light signIn-info text-start p-5">
                            <div>
                                <div className="text-dark text-start">
                                    <h2 className="pb-2">Login</h2>
                                </div>
                                {user?.email && <Alert variant="success" className="mt-4">
                                    <Alert.Heading className="">Login Successful</Alert.Heading>
                                </Alert>}
                                {!user || authError && <Alert variant="danger">
                                <Alert.Heading>{authError}</Alert.Heading>
                                </Alert>}
                               {!isLoading && <form onSubmit={handleLoginSubmit}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        name="email"
                                        onBlur={handleOnChange}
                                        placeholder="name@example.com"
                                        className="text-light bg-dark"
                                        />
                                        <label htmlFor="floatingInputCustom" >Email address</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnChange}
                                        placeholder="Password"
                                        className="text-light bg-dark"
                                        />
                                        <label htmlFor="floatingPasswordCustom">Password</label>
                                    </Form.Floating>
                                    <Button variant="primary" type="submit" className="px-5 py-2 mb-5 border-0 fs-4 fw-bold w-100 text-light bg-color-orange bg-color-orange:hover">
                                        Submit
                                    </Button>
                               </form>}
                                <div className="d-grid align-items-center d-lg-none d-md-block d-sm-block d-block justify-content-md-center justify-content-sm-center justify-content-center text-center pt-5 pb-3">
                                    <div className="text-dark">
                                        <h2 className="pt-2 pb-2">Google SignIn</h2>
                                        <hr className="w-25 mb-4 signIn-hr1 text-center m-auto"/>
                                    </div>
                                    <div className="">
                                        <button onClick="{googleLoginRedirect}" className=" px-5 py-2 my-2 border-0 fs-4 fw-bold text-center text-light bg-color-orange">Google</button>
                                    </div>
                                    <div className="pt-5 text-center">
                                        <span className="pt-5 fs-6 text-dark text-center">New on Necklace? Please SignUp</span>
                                        <br />
                                        <Link to="/signUp"><button className="py-2 border-2 card-border fs-4 fw-bold w-50 mt-4 bg-transparent text-dark text-center">SingUp</button></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Login;
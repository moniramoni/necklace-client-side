import './SignUp.css'
import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const SignUp = () => {

    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, user, authError, signInWithGoogle} = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)

    }

    const handleLoginSubmit = e => {

       if(loginData.password !== loginData.passwordConfirm){
           alert("Password did not match")
           return
       }
       registerUser(loginData.email, loginData.password, loginData.name, location, history)

        e.preventDefault()
        
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <div className="">
                <div className="login-section align-items-center d-flex justify-content-center align-items-center">
                    <Row className=" w-100 m-auto align-items-center d-flex justify-content-center my-5">
                        <Col xs={12} md={10} lg={5} className="d-flex justify-content-center align-items-center bg-color-gray bg-color-gray:hover d-lg-block d-md-none d-sm-none d-none first-column text-light text-start p-5 ">
                            <div className="d-grid align-items-center ">
                                <div>
                                    <h2 className="pt-4 mt-4">Google SignIn</h2>
                                    <hr className="w-25 mt-4 mb-2 signIn-hr1"/>
                                </div>
                                <div>
                                    <button onClick={handleGoogleSignIn} className="px-5 py-2 border-0 fs-4 fw-bold w-50 mb-5 mt-3 bg-color-orange">Google</button>
                                </div>
                                <div className="pt-3">
                                    <span className="pt-5 fs-6">Have an account? Please LogIn - <i className="fas fa-arrow-down"></i></span>
                                   <Link to="/login"><button className="py-2 border-2 card-border fs-4 fw-bold w-50 mt-4 bg-transparent text-light mb-5">Login</button></Link>
                                </div>
                            </div>
                        </Col>
                        {/* ------------------Login Form------------------- */}
                        <Col xs={12} md={10} lg={5} className=" d-grid bg-light align-items-center text-light signIn-info text-start p-5">
                            <div>
                            <div className="text-dark text-start">
                                    <h2 className="pb-2">SignUp</h2>
                                </div>
                                {user?.email && <Alert variant="success" className="mt-4">
                                    <Alert.Heading className="">SignUp Successful</Alert.Heading>
                                </Alert>}
                                { authError && <Alert variant="danger">
                                <Alert.Heading>{authError}</Alert.Heading>
                                </Alert>}
                               { !isLoading && <form onSubmit={handleLoginSubmit}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingInputCustom1"
                                        type="text"
                                        name="name"
                                        onBlur={handleOnBlur}
                                        placeholder="name@example.com"
                                        className="text-light bg-dark"
                                        />
                                        <label htmlFor="floatingInputCustom" >Name </label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        placeholder="name@example.com"
                                        className="text-light bg-dark"
                                        />
                                        <label htmlFor="floatingInputCustom" >Email</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom2"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        placeholder="Password"
                                        className="text-light bg-dark"
                                        />
                                        <label htmlFor="floatingPasswordCustom">Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        name="passwordConfirm"
                                        onBlur={handleOnBlur}
                                        placeholder="Confirm Password"
                                        className="text-light bg-dark"
                                        />
                                        <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                                    </Form.Floating>
                                    <Button variant="primary" type="submit" className="px-5 py-2 border-0 fs-4 fw-bold w-100 text-light bg-color-orange bg-color-orange:hover">
                                        Submit
                                    </Button>
                               </form>}
                               {isLoading && <Spinner animation="border" variant="danger" />}

                                <div className="d-grid align-items-center d-lg-none d-md-block d-sm-block d-block justify-content-md-center justify-content-sm-center justify-content-center text-center pt-5 pb-3">
                                    <div className="text-dark">
                                        <h2 className="pt-2 pb-2">Google SignIn</h2>
                                        <hr className="w-25 mb-4 signIn-hr1 text-center m-auto"/>
                                    </div>
                                    <div className="">
                                        <button onClick={handleGoogleSignIn} className=" px-5 py-2 my-2 border-0 fs-4 fw-bold text-center text-light bg-color-orange">Google</button>
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

export default SignUp;
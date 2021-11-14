import React from 'react';
import './Footer.css'
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="footer-container">

            {/* ------------- footer top part start ------------- */}
            <Row className="container m-auto my-0 pt-5 pb-1 d-md-flex">
                <Col className="text-center justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center" xs={12} md={12} lg={12}>
                    <img
                        src="https://i.ibb.co/rvfKJnC/logo-2.png"
                        width="100"
                        className="d-inline-block align-top footer-logo pb-4"
                        alt="React Bootstrap logo"
                    />
                    <p className="text-light fs-3 ">necklace.com</p>
                </Col>
                <Col className="d-none d-sm-none d-md-flex d-lg-flex d-flex justify-content-center" xs={12} md={12} lg={12}>                       
                        <ul className="footer-social text-white d-flex justify-content-sm-center fs-2 me-2 pb-4">
                            <li><i className="fab fa-facebook me-3"></i></li>
                            <li><i className="fab fa-twitter me-3"></i></li>
                            <li><i className="fab fa-youtube me-3"></i></li>
                        </ul>
                    </Col>
                {/* ------------- footer top part end --------- */}

                <hr className="container bg-light" />

                {/*------------- footer bottom part  start-----------*/}
                <Row className="footer-bottom-row container m-auto py-2 ">
                    <Col className=" d-flex justify-content-lg-start justify-content-md-start justify-content-center d-none d-sm-none d-md-flex d-lg-flex d-flex" xs={12} md={6} lg={6}>
                        <ul className="footer-menu color d-flex justify-content-sm-center ">
                            <li>Contact</li>
                            <li>About</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                    <Col className=" d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>
                        <p className="color ">© 2021 Minor Hotel. All Rights Reserved</p>
                    </Col>
                </Row>
            </Row>
            {/* ----------- footer bottom part  end ------------*/}
        
        </div>
    );
};

export default Footer;
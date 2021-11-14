import './SingleProduct.css'
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';

const SingleProduct = () => {

    // const { user } = useAuth();
    const {productId} = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(`https://guarded-shelf-19111.herokuapp.com/singleProduct/${productId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data));
    },[productId])

    return (
        <div className="p-5">
            <Row className="p-2 w-md-50 w-lg-50 w-100 m-auto justify-content-center align-items-center">
                {/* --------product images----------- */}
                <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                    <div className="d-grid text-center text-lg-end text-md-end justify-content-end p-5">
                        <div className="p-5 bg-color-gray mb-3">
                            <img className="py-1 w-100" src={singleProduct?.featuredImage} alt="" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-3 related-img">
                            <div className="p-5 bg-color-gray">
                                <img className="w-100" src={singleProduct?.featuredImage} alt="" />
                            </div>
                            <div className="p-5 bg-color-gray">
                                <img className="w-100" src={singleProduct?.relatedImageOne} alt="" />
                            </div>
                            <div className="p-5 bg-color-gray">
                                <img className="w-100" src={singleProduct?.relatedImageTwo} alt="" />
                            </div>
                        </div> 
                    </div>
                </Col>
                  {/* --------product Details----------- */}
                <Col xs={12} md={6} lg={6} className="p-2 p-md-0 p-lg-0 p-sm-2">
                    <div className="">
                        <div className="">
                            <h1 className="text-start pb-4">{singleProduct?.name}</h1>
                            <h6 className="text-start pb-4">Start/Reviews: {singleProduct?.reviews}</h6>
                            <h6 className="text-start color-orange fs-3 pb-4"><span  className="text-dark"> Price: </span> ${singleProduct?.price}</h6>
                            <p className="pb-3 fw-light text-start pe-4">{singleProduct?.description}</p>
                        </div>
                        <div>
                            <div className="text-start pb-5 bg-light">
                                <h1 className="text-start fs-4 pb-1">Quantity</h1>
                                <Link to="/placeOrder"><button className="text-start px-3 py-2 me-2 border-gray"><i className="fas fa-plus color-orange "></i></button></Link>
                                <Link to="/placeOrder"><button className="text-start px-5 py-0 me-2 border-gray"><h2 className="fs-3">1</h2 ></button></Link>
                                <Link to="/placeOrder"><button className="text-start px-3 py-2 me-2 border-gray"><i className="fas fa-minus color-orange "></i></button></Link>
                            </div>
                        </div> 
                        <div>
                            <div className="text-start py-2 bg-light">
                                {/* <p className="p-2 px-3 text-light">{product.shortDescription.slice(0, 55)}...</p> */}
                                <Link to="/placeOrder"><button className="me-3 text-start px-5 py-3 bg-color-orange card-border text-light fw-normal">Add To Cart</button></Link>
                                <Link to="/placeOrder"><button className="text-start px-4 py-3 me-2 bg-color-gray card-border"><i className="fas fa-heart color-orange "></i></button></Link>
                            </div>
                        </div> 
                    </div>
                </Col>
            </Row>       
        </div>
    );
};

export default SingleProduct;



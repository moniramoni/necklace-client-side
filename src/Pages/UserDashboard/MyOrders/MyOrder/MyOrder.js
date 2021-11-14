import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MyOrder = ({order}) => {


    // myOrder Delete
    const handleDeleteMyOrders = (id) => {
        const proceed = window.confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`https://guarded-shelf-19111.herokuapp.com/deleteMyOrders/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount){
                
                alert(' Delete Success')
            }
        })
        
        }
     
        console.log(id)
    }


    return (
        <div>
            <Container className="px-0 px-sm-0 px-md-5 px-lg-5 m-auto">
                <Row className="my-3 py-3 py-md-5 py-lg-3 w-100 d-grid d-sm-grid d-md-grid d-lg-flex justify-content-center bg-light text-light card-border">
                    <Col xs={12} md={6} lg={2} className="justify-content-center m-auto">
                        <div className="bg-dark p-2 m-2">
                            <img className="w-100 " src={order?.singleProduct?.featuredImage} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={10} className="">
                        <Row className="w-100 d-grid d-sm-grid d-md-grid d-lg-flex justify-content-center p-0 m-0">
                            <Col xs={12} md={12} lg={10} className="py-0 m-0 justify-content-end ">
                                <div className="text-dark text-sm-center text-center text-lg-start pt-2">
                                    <h3>{order?.singleProduct?.name}</h3>
                                    <h6 className="fs-5">Price: {order?.singleProduct?.price}</h6>
                                    <span className="fs-6">No: {order?.phone}</span>
                                    <span className="fs-6 ms-4">Date: {order?.date}</span>
                                    <h6 className="fs-6">Address: {order?.address}</h6>
                                </div>
                            </Col>
                            {/* delete column */}
                            <Col xs={12} md={12} lg={2} className="border-lg-start border-md-0 border-0 border-sm-0 d-flex justify-content-center align-items-center ">
                                <button className="px-4 py-4 my-4 my-sm-4 my-md-4 my-lg-2" onClick={() => handleDeleteMyOrders(order?._id)}><i className="fas fa-trash-alt color-orange fs-1"></i></button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;
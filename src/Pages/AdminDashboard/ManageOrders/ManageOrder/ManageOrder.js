import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import useAuth from '../../../../hooks/useAuth';
import './ManageOrder.css'

const ManageOrder = () => {
    const [loading, setLoading] = useState(true)
    const [manageOrders, setManageOrders] = useState([])
    // const {user} = useAuth()

    console.log(manageOrders)



    useEffect(() => {
        fetch("https://guarded-shelf-19111.herokuapp.com/manageOrders")
        .then(res => res.json())
        .then(result => {
            setManageOrders(result);
            setLoading(false)
        })
    }, [loading])

    

    // delete button 
    const handleDeleteManageOrders = (id) => {
        const proceed = window.confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`https://guarded-shelf-19111.herokuapp.com/deleteManageOrders/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount){
                  
                alert(' Delete Success')
                const remainingOrder = manageOrders?.filter(
                    (order) => order._id !== id
                );
                setManageOrders(remainingOrder);
            }
        })

        }
        
        console.log(id)
    }


    // Approved button
    const handleUpdateManageOrders = (id) => {
        const updateStatus = manageOrders.find(
            (update) => update?._id === id
        );
        updateStatus.status = "approved";

        const uri = `https://guarded-shelf-19111.herokuapp.com/manageOrderUpdate/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Approved successfully");
                    setLoading(true)
                }
            });
    };

    return (
        <>
            <div className="text-center">
                <div><h1 className=" mb-5 text-dark pt-5">Manage Orders</h1></div>
            </div>
            <div className="row container m-auto my-5">
                {manageOrders?.map((manageOrder) => (
                    <div className="col-lg-12 col-md-12 col-12 " key= {manageOrder?._id}>
                        <Container className="px-0 px-sm-0 px-md-5 px-lg-5 m-auto ">
                            <Row className="my-3 py-3 py-md-5 py-lg-1 w-100 d-grid d-sm-grid d-md-grid d-lg-flex justify-content-center bg-light text-light card-border border">
                                <Col xs={12} md={6} lg={2} className="justify-content-center m-auto">
                                    <div className="bg-dark p-2 m-2">
                                        <img className="w-100 " src={manageOrder?.singleProduct?.featuredImage} alt="" />
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={10} className="">
                                    <Row className="w-100 d-grid d-sm-grid d-md-grid d-lg-flex justify-content-center p-0 m-0">
                                        <Col xs={12} md={12} lg={8} className="py-0 m-0 justify-content-end ">
                                            <div className="text-dark text-sm-center text-center text-lg-start pt-2">
                                                <h3 className="fs-5 fw-bold ">{manageOrder?.singleProduct?.name}</h3>
                                                <h6 className="fs-6 fw-bold">Price: <span className="color-orange">{manageOrder?.singleProduct?.price}</span></h6>
                                                <img className="user-img " src={manageOrder?.featuredImage} alt="" />
                                                <span className="fs-6 fw-bold px-2">{manageOrder?.name}</span>
                                                <span className="fw-thin"> {manageOrder?.phone}</span>                                           
                                                <br />
                                                <span className="me-4">D: {manageOrder?.date}</span>
                                                <span className="fs-6">{manageOrder?.address}</span>
                                            </div>
                                        </Col>
                                        {/* delete column */}
                                        <Col xs={12} md={12} lg={2} className="border-lg-start border-md-0 border-0 border-sm-0 d-flex justify-content-center align-items-center ">
                                            <button className="px-4 py-3 my-4 my-sm-4 my-md-4 my-lg-2" onClick={() => handleDeleteManageOrders(manageOrder?._id)}><i className="fas fa-trash-alt color-orange fs-1"></i></button>
                                        </Col>
                                        <Col xs={12} md={12} lg={2} className="border-lg-start border-md-0 border-0 border-sm-0 d-flex justify-content-center align-items-center ">
                                            <button onClick={() => handleUpdateManageOrders(manageOrder?._id)} className="px-2 mx-1 py-4 my-2 ">{manageOrder?.status}</button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ManageOrder;


// {/* <button onClick={() => handleUpdateManageOrders(manageOrder._id)} className="px-4 mx-1 py-1 my-2">{manageOrder.status}</button>

// <button onClick={() => handleDeleteManageOrders(manageOrder._id)} className="px-4 py-1 my-2">Delete</button> */}
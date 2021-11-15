import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './MyOrders.css'



const MyOrders = () => {
    const [loading, setLoading] = useState(true)
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])

    console.log(myOrders)

    useEffect(() => {
        fetch(`https://guarded-shelf-19111.herokuapp.com/myOrders/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            setMyOrders(result)
            setLoading(false)
        })
    }, [user?.email, loading])

     // myOrder Delete
     const handleDeleteMyOrders = (id) => {
        // setLoading(true)
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
                setLoading(true)
            }
        })
        
        }
     
        console.log(id)
    }

    return (
        <> 
        {/* ------------------ */}
        <div className="shop-container">
            <div className="banner-shop py-5">
                {user?.photoURL? <img className="user-photo" src={user.photoURL} alt="" />:
                <img className="user-photo-default" src= "https://i.ibb.co/3sHw2zQ/user-img.png "alt="" />}

                {user?.displayName? <h1 className="color-orange pt-3 fs-5 ">{user?.displayName}</h1>:
                <h1 className="color-orange pt-3 fs-5 ">User</h1>}

                <h6 className="text-center text-light fw-light pt-1"><span className="color fs-6 fw-light">Email: </span> {user?.email} </h6>
            </div>
        </div>
        {/* ------------------------ */}

        <h1 className="text-start text-dark ms-4 ps-5 pb-4">My Orders</h1>

            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {myOrders?.map((order) => (
                    <div key={order._id}>
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
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
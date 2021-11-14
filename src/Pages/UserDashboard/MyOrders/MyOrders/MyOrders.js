import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css'



const MyOrders = () => {

    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])

    console.log(myOrders)

    useEffect(() => {
        fetch(`https://guarded-shelf-19111.herokuapp.com/myOrders/${user?.email}`)
        .then(res => res.json())
        .then(result => {
            setMyOrders(result)
        })

    }, [user.email])

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
                    {myOrders?.map((order) => <MyOrder order={order} key={order._id}></MyOrder>)}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
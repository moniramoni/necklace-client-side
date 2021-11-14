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
                <img className="user-photo" src={user?.photoURL} alt="" />
                <h1 className="color-orange pt-3 fs-5 ">{user?.displayName}</h1>
                <h6 className="text-center text-light fw-light pt-1"><span className="color fs-6 fw-light">Email: </span> {user?.email} </h6>
            </div>
        </div>
        {/* ------------------------ */}

            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {myOrders?.map((order) => <MyOrder order={order} key={order._id}></MyOrder>)}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
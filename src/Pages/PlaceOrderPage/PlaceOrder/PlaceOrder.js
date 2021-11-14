import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';
import './PlaceOrder.css'

const PlaceOrder = () => {

    const {productId} = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(`https://guarded-shelf-19111.herokuapp.com/singleProduct/${productId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data));
    },[productId])

    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status='Pending'
        data.singleProduct={...singleProduct}
        console.log(data);

        fetch('https://guarded-shelf-19111.herokuapp.com/myOrders',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert('order added')
        })
    };


    return (
        <>
            <Header></Header>
            <SingleProduct></SingleProduct>
            <div className="p-5">
                <div className="">
                    <form className=" border shipping-form d-block w-75 m-auto p-5" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="fs-4 fw-bold text-center pb-4">Place Information </h3>
                        <input 
                            className="w-75 my-2"
                            defaultValue={user?.displayName} {...register("name", { required: true })} 
                        />
                        {errors.displayName && <span className="text-danger">This field is required</span>}
                        <br />
                        <input
                            className="w-75 my-2"
                            defaultValue={user?.email} {...register("email", { required: true })} 
                        />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <br />
                        <input 
                            className="w-75 my-2"
                            placeholder="Address" defaultValue="" {...register("address", { required: true })} 
                        />
                        <br />
                        <input
                            className="w-75 my-2"
                            placeholder="City" defaultValue="" {...register("city")} 
                        />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <br />
                        <input 
                            className="w-75 my-2"
                            placeholder="phone number" defaultValue="" {...register("phone")} 
                        />
                        <br />
                        <input
                            // placeholder="booked date"
                            type="date"
                            className="p-2 w-75 " {...register("date")}
                        />
                        <br />
                        <input className="px-5 my-4 w-50 bg-dark text-light border-0 py-2 rounded" type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;
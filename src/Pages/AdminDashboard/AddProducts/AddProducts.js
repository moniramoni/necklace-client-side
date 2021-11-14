import React from 'react';
import './AddProducts.css'
import { useForm } from "react-hook-form";
// import useAuth from '../../hooks/useAuth';


const AddProducts = () => {

    // const {user} = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = (data) => {
        // data.email = user?.email;
        fetch("https://guarded-shelf-19111.herokuapp.com/addProducts", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
        // alert('product added')
    };


    return (
        <div>
            <h1 className="mt-5 text-center text-dark">Add Products</h1>
            <div className="login-box w-75 m-auto my-5 bg-color-gray rounded bg-shadow">
                <div className="event-box d-flex justify-content-center align-items-center">
                    <div className="login-form py-5 w-75">
                        <form onSubmit={handleSubmit(onSubmit)} className="color-gray">
                            <input
                                {...register("name", { required: true })}
                                placeholder="Product Name"
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <input
                                {...register("shortDescription", { required: true })}
                                placeholder="Short Description"
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <div className="d-grid d-grid d-md-flex d-lg-flex justify-content-center align-items-center w-100 m-0 p-0">
                                <input 
                                    type="number" {...register("price", { required: true })}
                                    placeholder="Price"
                                    className="p-2 m-2 w-100 rounded border-0"
                                />
                                <input 
                                    type="number" {...register("shippingPrice", { required: true })}
                                    placeholder="Shipping Price"
                                    className="p-2 m-2 w-100 rounded border-0"
                                />
                                <input 
                                    type="number" {...register("stock", { required: true })}
                                    placeholder="Stock"
                                    className="p-2 m-2 w-100 rounded border-0"
                                />
                            </div>
                            <br />
                            <input
                                {...register("featuredImage", { required: true })}
                                placeholder="Featured Image"
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <input
                                {...register("relatedImageOne", { required: true })}
                                placeholder=" Related Image one"
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <input
                                {...register("relatedImageTwo", { required: true })}
                                placeholder="Related Image Two"
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <div className="d-grid d-md-grid d-lg-flex d-sm-grid justify-content-center align-items-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="text-light text-start mx-2">rating</p>
                                    <select {...register("rating", { required: true })} className="p-2 mb-2 mx-2  rounded border-0">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="text-light text-start mx-2">category</p>
                                    <select {...register("category", { required: true })} className="p-2 mb-2 mx-2  rounded border-0">
                                        <option value="diamond">Diamond</option>
                                        <option value="gold">Gold</option>
                                        <option value="pearls">Pearls</option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="text-light text-start mx-2">Reviews</p>
                                    <input 
                                        type="number" {...register("reviews", { required: true })}
                                        className="p-2 m-2 w-100 rounded border-0"
                                        placeholder="Digit"
                                    />
                                </div>
                            </div>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn bg-color-orange text-light fw-bold w-50 my-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth()

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
     
        const uri = "https://guarded-shelf-19111.herokuapp.com/reviews";
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("added review successfull");
                    // reset();
                }
            });
    
        console.log(data);
    };

    return (
        <div>
            <h1 className="mt-5 text-center text-dark">Add Comments</h1>
            <div className="login-box w-75 m-auto my-5 bg-color-gray rounded bg-shadow">
                <div className="event-box d-flex justify-content-center align-items-center">
                    <div className="login-form py-5 w-75">
                        <form onSubmit={handleSubmit(onSubmit)} className="color-gray">
                            <input
                                {...register("name", { required: true })}
                                placeholder="Name"
                                value={user?.displayName}
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                name="email"
                                value={user?.email}
                                className="p-2 m-2 w-100 rounded border-0"
                            />
                            <br />
                            <input
                                className="input-field p-2 m-2 w-100 rounded border-0"
                                name="comments"
                                placeholder="Comments"
                                {...register("comments", { required: true })}
                                />
                                <br />
                            <div className="d-grid d-md-grid d-lg-flex d-sm-grid justify-content-center align-items-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <p className="text-light text-start mx-2">rating</p>
                                    <select {...register("rating", { required: true })} className="p-2 mb-2 mx-2 w-100 rounded border-0">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <br />

                            {/* {errors.exampleRequired && <span>This field is required</span>} */}

                            <input type="submit" value="Add" className="btn bg-color-orange text-light fw-bold w-50 my-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
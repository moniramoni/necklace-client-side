import React, { useEffect, useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
import Rating from 'react-rating'
import ManageOrder from '../../AdminDashboard/ManageOrders/ManageOrder/ManageOrder';

const ReviewCollections = () => {
    // const {user} = useAuth()
    const [reviewCollections, setReviewCollection] = useState([])

    useEffect(() => {
        fetch("https://guarded-shelf-19111.herokuapp.com/reviews")
        .then(res => res.json())
        .then(result => {
            setReviewCollection(result);
        })
    }, [])

    return (
        <>
            <h1 className="my-5 py-3"> Review Collections</h1>
            <div className="m-auto mb-5 pb-5">
                <div className="row container  m-auto">
                    {reviewCollections?.map((reviewCollection) => (
                        <div className="col-md-6 col-lg-4 col-12 text-start" key= {reviewCollection._id}>
                            <div className="mb-4">
                                <div className="text-center">

                                   {reviewCollection?.featuredImage? <img className="profile-img border border-2 shadow" src={reviewCollection.featuredImage} alt="" /> :
                                    <img className="profile-img border border-2 shadow" src= "https://i.ibb.co/3sHw2zQ/user-img.png "alt="" />}

                                    <h4 className="pt-2 fs-6 px-3 color-orange">{reviewCollection.name}</h4>
                                    <hr className="w-25 m-3 text-center m-auto" />
                                    <p className="pt-2 px-3">{reviewCollection.comments}</p>
                                    <Rating initialRating={reviewCollection.rating} emptySymbol="far fa-star color-orange" fullSymbol="fas fa-star color-orange" readonly></Rating>
                                    <hr className="w-100 m-3" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ReviewCollections;
import React, { useEffect, useState } from 'react';
// import useAuth from '../../../hooks/useAuth';

const ReviewCollections = () => {
    // const {user} = useAuth()
    const [reviewCollections, setReviewCollection] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(result => {
            setReviewCollection(result);
        })
    }, [])

    return (
        <>
            <h2>Review Collections: {reviewCollections.length}</h2>
            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {reviewCollections?.map((reviewCollection) => (
                        <div className="col-md-6 col-lg-4 col-12 text-start" key= {reviewCollection._id}>
                            <div className="mb-4">
                                <div className="text-center">
                                    <img className="profile-img border border-2 card-border shadow" src={reviewCollection.featuredImage} alt="" />
                                    <h4 className="pt-2 fs-6 px-3 color-orange">{reviewCollection.name}</h4>
                                    <hr className="w-25 m-3 text-center m-auto" />
                                    <p className="p-2 px-3">{reviewCollection.comments}</p>
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
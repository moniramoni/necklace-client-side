import './FeaturedProducts.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    // const {setIsLoading} = useAuth()

    useEffect(() => {
        fetch(`https://guarded-shelf-19111.herokuapp.com/addProducts`)
        .then(res => res.json())
        .then(result => setProducts(result))
        // setIsLoading(false)
    }, [])


    return (
        <div>
             <div className="text-center mt-5">
                <h1 className="my-5 pt-5 pb-3"> Featured Products</h1>
            </div>
            <div className="m-auto mb-5">
                <div className="row container  m-auto">
                    {products?.slice(0,6).map((product) => (
                        <div className="col-md-6 col-lg-4 col-12" key= {product._id}>
                            <div className=" mb-5 bg-color-gray">
                                <div className="">
                                    <h4 className="text-start pb-4 pt-4 fs-5 px-3 text-light">{product.name.slice(0, 23)}</h4>
                                    <img className="product-img" src={product.featuredImage} alt="" />
                                    <div className="px-3 py-2  d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="text-light">$ {product.price}</h6>
                                        </div>
                                        <div>
                                            <h6 className="text-light">Stock {product.stock}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start card-border-bottom">
                                    {/* <p className="p-2 px-3 text-light">{product.shortDescription.slice(0, 55)}...</p> */}
                                </div>
                                <div className="text-start p-3">
                                    <p className="text-light">{product.shortDescription.slice(0, 55)}...</p>
                                </div>
                                <div className="text-start py-2 bg-light">
                                    {/* <p className="p-2 px-3 text-light">{product.shortDescription.slice(0, 55)}...</p> */}
                                    <Link to={`/placeOrder/${product._id}`}><button className="me-3 text-start px-4 py-1 bg-color-orange card-border text-light fw-normal">Purchase</button></Link>
                                    <Link to={`/placeOrder/${product._id}`}><button className="text-start px-4 py-1 me-2 bg-color-gray card-border"><i className="fas fa-heart color-orange "></i></button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;

/* 
https://i.ibb.co/TBDbD2d/necklace1-removebg-preview.png
https://i.ibb.co/58TXG2t/necklace2-removebg-preview.png
https://i.ibb.co/rmTp9kK/necklace3-removebg-preview.png
https://i.ibb.co/r03cGQf/necklace4-removebg-preview.png
https://i.ibb.co/6BmnSs7/necklace5-removebg-preview.png
https://i.ibb.co/TRdpfwn/necklace6-removebg-preview.png
https://i.ibb.co/FYBFmZb/necklace7-removebg-preview.png
https://i.ibb.co/fdmVJSx/necklace8-removebg-preview.png
https://i.ibb.co/MVBP68z/necklace9-removebg-preview.png
https://i.ibb.co/X5YFwdy/necklace10-removebg-preview.png
https://i.ibb.co/bb33qKT/necklace11-removebg-preview.png
https://i.ibb.co/PZ5zQkb/necklace12-removebg-preview.png
https://i.ibb.co/vszqJ8X/necklace13-removebg-preview.png
https://i.ibb.co/Dbg1NKk/necklace14-removebg-preview.png
https://i.ibb.co/pPN8x6W/necklace15-removebg-preview.png
https://i.ibb.co/0MKtsJw/necklace17-removebg-preview.png
*/
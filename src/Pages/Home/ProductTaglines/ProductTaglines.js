import React from 'react';


const taglines = [
    {
        tagline: 'Exceptional Jewelry ',
        taglineDescription: 'We have a long history of making exceptional unique or custom, handmade jewelry for our customers. we Provide ancient art which makes every piece of Jewelry exceptional and unique',
        img: "Cavity",
        id: "1"
    },
    {
        tagline: '100% Pure Material',
        taglineDescription: 'Buy 100% Pure Diamond Necklace Luxury Diamond Engagement Necklace For Women Natural Diamond Necklace Quality Real Diamond Necklace For Women',
        img: "Cavity",
        id: "2"
    },
    {
        tagline: 'Secure Payment & Delivery',
        taglineDescription: 'We Offers 100% secure online payments by credit card. Ensure that the shipping label correctly identifies the correct customer name and address as well as the device',
        img: "TeethWhitening",
        id: "31"
    }
]

const ProductTaglines = () => {
    

    return (
        <div className="m-auto mb-5">
            <div className="row container  m-auto">
                {taglines?.map((tagline) => (
                    <div className="col-md-6 col-lg-4 col-12 text-start" key= {tagline.id}>
                        <div className="mb-4">
                            <div className="">
                                {/* <img className="w-100" src="{tagline.img}" alt="" /> */}
                                <p><i className="fas fa-gem text-dark px-3 h2"></i></p>
                            </div>
                            <div className="text-start">
                                <h4 className="p-2 px-3">{tagline.tagline.slice(0, 23)}</h4>
                                <hr className="w-25 m-3" />
                                <p className="p-2 px-3">{tagline.taglineDescription.slice(0, 90)}...</p>
                                <hr className="w-75 m-3" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTaglines;
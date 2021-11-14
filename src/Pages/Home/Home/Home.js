import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import ProductTaglines from '../ProductTaglines/ProductTaglines';
import ReviewCollections from '../ReviewCollections/ReviewCollections';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ProductTaglines></ProductTaglines>
            <FeaturedProducts></FeaturedProducts>
            <ReviewCollections></ReviewCollections>
            <Footer></Footer>
        </div>
    );
};

export default Home;
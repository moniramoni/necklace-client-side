import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import ProductTaglines from '../ProductTaglines/ProductTaglines';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ProductTaglines></ProductTaglines>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;
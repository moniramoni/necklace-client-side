import React from 'react';
import Header from '../../Shared/Header/Header';
import Products from '../Products/Products';
import ProductsBanner from '../ProductsBanner/ProductsBanner';

const ProductPage = () => {
    return (
        <div>
            <Header></Header>
            <ProductsBanner></ProductsBanner>
            <Products></Products>
        </div>
    );
};

export default ProductPage;
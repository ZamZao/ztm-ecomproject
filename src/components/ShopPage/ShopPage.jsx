import React from 'react'
import {Routes,Route } from 'react-router-dom';
import CollectionPage from '../collectionpage/CollectionPage';
import CollectionOverview from '../collections-overview/CollectionOverview';

const ShopPage = () => {

    return (
        <div>
            <Routes>
            <Route path='/' element={
                <>
                <h1>Collections</h1>
                <CollectionOverview/>
            </>}/>
            <Route path=":collectionName" element={<CollectionPage/>}/>
            </Routes>

        

        </div>
    )
}
export default ShopPage;
import React from 'react'
import {Routes,Route } from 'react-router-dom';
import CollectionPage from '../collectionpage/CollectionPage';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import WithSpinner from '../with-spinner/WithSpinner';
import { createStructuredSelector } from 'reselect';
import {selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionOverviewContainer from '../collections-overview/collections-overview-container';
import { useEffect } from 'react';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionStart,isCollectionLoaded}) => {
    
    useEffect(()=>{
        fetchCollectionStart();
    },[fetchCollectionStart])    
        return (
            <div>
            <Routes>
            <Route path='/' element={
                <>
                <h1>Collections</h1>
                <CollectionOverviewContainer/>
            </>}/>
            <Route path=":collectionName" element={<CollectionPageWithSpinner isLoading={!isCollectionLoaded}/>}/>
            </Routes>
        </div>
        )
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})
const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: selectIsCollectionLoaded
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
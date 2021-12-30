import React, { Component } from 'react'
import {Routes,Route } from 'react-router-dom';
import CollectionPage from '../collectionpage/CollectionPage';
import CollectionOverview from '../collections-overview/CollectionOverview';
import { convertCollectionsSnapShotToMap, firestore } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state ={
        loading:true,
    }
    
    unsubscribeFromSnapShot = null;

    componentDidMount(){

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapShotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading:false});
            
        });
    }
    
    render() {
        const {loading} = this.state;

        return (
            <div>
            <Routes>
            <Route path='/' element={
                <>
                <h1>Collections</h1>
                <CollectionOverviewWithSpinner isLoading={loading}/>
            </>}/>
            <Route path=":collectionName" element={<CollectionPageWithSpinner isLoading={loading}/>}/>
            </Routes>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);
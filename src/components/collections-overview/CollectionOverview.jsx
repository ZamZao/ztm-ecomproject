import React from 'react'
import { StyledCollectionOverview } from './StyledCollectionOverview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ShopCollectionPreview from '../ShopPage/ShopCollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'


const CollectionOverview = ({collections}) => {
    return (
        <StyledCollectionOverview>
        
            {collections.map(collection => (<ShopCollectionPreview collection={collection} key={collection.id}/>))} 
            
        </StyledCollectionOverview>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)

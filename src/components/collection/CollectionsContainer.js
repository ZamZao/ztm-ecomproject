import React from 'react'
import { StyledCollectionsContainer } from '../styled-components/StyledCollectionsContainer'
import IndividualCollectionContainer from './IndividualCollectionContainer'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/directory/directory.selectors'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'


const CollectionsContainer = ({collections,collectionsForPreview}) => {
    
    console.log('collectionContainer',{collections},{collectionsForPreview})

    return (
        <StyledCollectionsContainer
        >
        {collections.map(collection => (<IndividualCollectionContainer key={collection.id} collection={collection} />))
        
    }
        

        </StyledCollectionsContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
    collectionsForPreview: selectCollectionsForPreview,

})

export default connect(mapStateToProps)(CollectionsContainer);

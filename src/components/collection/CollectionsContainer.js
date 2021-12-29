import React from 'react'
import { StyledCollectionsContainer } from '../styled-components/StyledCollectionsContainer'
import IndividualCollectionContainer from './IndividualCollectionContainer'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/directory/directory.selectors'


const CollectionsContainer = ({collections}) => {
    
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

})

export default connect(mapStateToProps)(CollectionsContainer);

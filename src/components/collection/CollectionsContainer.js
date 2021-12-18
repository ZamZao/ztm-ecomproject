import React from 'react'
import { StyledCollectionsContainer } from '../styled-components/StyledCollectionsContainer'
import IndividualCollectionContainer from './IndividualCollectionContainer'


const CollectionsContainer = (props) => {
    
    return (
        <StyledCollectionsContainer
        >
        { props.collections.map(collection => (<IndividualCollectionContainer key={collection.id} collection={collection} />))
        
    }
        

        </StyledCollectionsContainer>
    )
}

export default CollectionsContainer

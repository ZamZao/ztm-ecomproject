import React from 'react'
import IndividualCollectionTitle from './IndividualCollectionTitle'
import { StyledIndividualCollectionContainer } from '../styled-components/StyledIndividualCollectionContainer'

const IndividualCollectionContainer = (props) => {
    return (
        <StyledIndividualCollectionContainer>
            <IndividualCollectionTitle CollectionTitle={props.collection.name}/>
            
        </StyledIndividualCollectionContainer>
    )
}

export default IndividualCollectionContainer

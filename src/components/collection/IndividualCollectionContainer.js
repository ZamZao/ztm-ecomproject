import React from 'react'
import IndividualCollectionTitle from './IndividualCollectionTitle'
import { StyledIndividualCollectionContainer } from '../styled-components/StyledIndividualCollectionContainer'
import { StyledBackgroundImage } from '../styled-components/StyledBackgroundImage'

const IndividualCollectionContainer = (props) => {
    return (
        <StyledIndividualCollectionContainer  size={props.collection.size}>
            
            <StyledBackgroundImage imgUrl = {props.collection.imageUrl}/>
            <IndividualCollectionTitle CollectionTitle={props.collection.title}/>

            
        </StyledIndividualCollectionContainer>
    )
}

export default IndividualCollectionContainer

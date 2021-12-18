import React from 'react'
import { StyledIndividualCollectionTitle } from '../styled-components/StyledIndividualCollectionTitle'

const IndividualCollectionTitle = (props) => {
    return (
        <StyledIndividualCollectionTitle>
            <h1 className='title'>{props.CollectionTitle}</h1>
            <span className='subtitle'>shop now</span>
            
        </StyledIndividualCollectionTitle>
    )
}

export default IndividualCollectionTitle

import React from 'react'
import IndividualCollectionTitle from './IndividualCollectionTitle'
import { StyledIndividualCollectionContainer } from '../styled-components/StyledIndividualCollectionContainer'
import { StyledBackgroundImage } from '../styled-components/StyledBackgroundImage'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom' 

const IndividualCollectionContainer = (props) => {

    const Navigate = useNavigate(); 
    return (
        
        
        // <Link to={`/shop/${props.collection.title}`}>
        <StyledIndividualCollectionContainer  
        onClick={() => {Navigate(`/shop/${props.collection.title.toLowerCase()}`)}}
        size={props.collection.size}>
            <StyledBackgroundImage imgUrl = {props.collection.imageUrl}/>
            <IndividualCollectionTitle CollectionTitle={props.collection.title}/>    
        </StyledIndividualCollectionContainer>
        // </Link>
    )
}

export default IndividualCollectionContainer

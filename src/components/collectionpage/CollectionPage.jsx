import React from 'react'
import { StyledCollectionPage } from './StyledCollectionPage'
import { useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ArticlePreview from '../ShopPage/ArticlePreview'



const CollectionPage = () => {
    const params = useParams();
    let selectedCollection = useSelector(state => state.shop.collections[params.collectionName]);
    selectedCollection = selectedCollection ? selectedCollection : null;
    return (
        <StyledCollectionPage>

            <h2 className='title'>{selectedCollection.title.toUpperCase()}</h2>
            <div className='items'> 
                {selectedCollection.items.map(( item =>
                <div key={item.id} className='collection-items'>
                    <ArticlePreview key={item.id} item={item} /> 
                </div>
            ))}; 
                </div>
            
        </StyledCollectionPage>
    )
}

export default CollectionPage

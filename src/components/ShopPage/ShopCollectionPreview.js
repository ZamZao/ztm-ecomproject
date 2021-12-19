import React from 'react'
import ArticlePreview from './ArticlePreview';
import { StyledCollectionPreview } from './StyleCollectionPreview';

function ShopCollectionPreview(props) {
    const ArrArticlePreview = props.collection.items.slice(0,4);
    return (
        <StyledCollectionPreview>
        <div>
            <h1 className='title'>{props.collection.title.toUpperCase()}</h1>
        </div>
        <div className='preview'>
        {
            ArrArticlePreview.map( article => (<ArticlePreview key={article.id} article={article} /> ))
        }
        </div>
        </StyledCollectionPreview>
    )
}

export default ShopCollectionPreview

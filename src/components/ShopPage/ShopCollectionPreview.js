import React from 'react'
import ArticlePreview from './ArticlePreview';
import { StyledCollectionPreview } from './StyleCollectionPreview';
import { Link } from 'react-router-dom';

function ShopCollectionPreview({collection}) {


        const ArrArticlePreview = collection.items.slice(0,4)

    return (
        <StyledCollectionPreview>
        <div>
            <h1 className='title'>
                <Link to={collection.title.toLowerCase()}>
                    {collection.title.toUpperCase()}
                </Link>
            </h1>
        </div>
        <div className='preview'>
        {
            ArrArticlePreview.map( item => (<ArticlePreview key={item.id} item={item} /> ))
        }
        </div>
        </StyledCollectionPreview>
    )
}

export default ShopCollectionPreview

import React from 'react'
import { StyledArticlePreview } from './StyledArticlePreview'

function ArticlePreview(props) {
    return (
        <StyledArticlePreview>
            <div className='image' style={{backgroundImage: `url(${props.article.imageUrl})`}}></div>
            <div className="collection-footer">
            <p className='name'>{props.article.name}</p>
            <p className='price'>${props.article.price}</p>
            </div>
        </StyledArticlePreview>
    )
}
export default ArticlePreview

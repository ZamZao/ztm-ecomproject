import React from 'react'
import { StyledArticlePreview } from './StyledArticlePreview'
import CustomButton from '../custombutton/CustomButton'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

function ArticlePreview({item,addItem}) {
    const {name,price,imageUrl} = item;
    return (
        <StyledArticlePreview>
            <div 
            className='image' 
            style={{backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="collection-footer">
            <p className='name'>{name}</p>
            <p className='price'>${price}</p>
          

            </div>
        <CustomButton onClick={()=> addItem(item)} className='custom-button' inverted>Add To Cart</CustomButton>
        </StyledArticlePreview>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default  connect(null,mapDispatchToProps)(ArticlePreview);
 
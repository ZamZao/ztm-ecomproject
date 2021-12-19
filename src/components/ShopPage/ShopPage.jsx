import React, { Component } from 'react'
import { SHOPDATA } from './ShopData';
import ShopCollectionPreview from './ShopCollectionPreview';

export default class ShopPage extends Component {
    constructor(){
        super();
        this.state ={
            collections: SHOPDATA
        }
    }
    
    
    render() {
        return (
            <div>
                <h1>Collections</h1>
                 {this.state.collections.map(collection => (<ShopCollectionPreview collection={collection} key={collection.id}/>))} 
            </div>
        )
    }
}

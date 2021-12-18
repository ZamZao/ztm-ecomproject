import Header from '../components/header/Header'
import CollectionsContainer from '../components/collection/CollectionsContainer' 

import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
        <div>
            <Header/>
            <CollectionsContainer collections={this.props.collections}/>
        </div>
           
        )
    }
}



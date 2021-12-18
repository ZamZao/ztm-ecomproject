import Header from './header/Header'
import CollectionsContainer from './collection/CollectionsContainer'
import styledComponents from 'styled-components'

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



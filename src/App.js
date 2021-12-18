import React, { Component } from 'react'
// import { createGlobalStyle } from 'styled-components';
import HomePage from './components/HomePage';
import { GlobalStyle } from './components/styled-components/GlobalStyle';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      collections : [
        { id:0,
          name:"Hats",
          imgURL:'imgURL'
        },
        { id:1,
          name:"Jackets",
          imgURL:'imgURL',
        },
        { id:2,
          name:"Sneakers",
          imgURL:'imgURL'
        },
        { id:3,
          name:"Women",
          imgURL:'imgURL'
        },
        { id:4,
          name:"Men",
          imgURL:'imgURL'
        }
      ],
      search: "hello",
    }
  }

  render() {
    return (
        <>
        <GlobalStyle/>
        <HomePage collections={this.state.collections} />
        </>
        

    )
  }
}

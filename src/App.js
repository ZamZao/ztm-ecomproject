import React, { Component } from 'react'
import HomePage from './pages/HomePage';
import { GlobalStyle } from './components/styled-components/GlobalStyle';
import ShopPage from './components/ShopPage/ShopPage';

import { connect } from 'react-redux';

import { Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import AuthentificationPage from './pages/AuthentificationPage';
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';





class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
              setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route exact path='/shop/*' element={<ShopPage/>}/>
        <Route exact path='/checkout' element={<CheckoutPage/>} />
        <Route exact path='/signin' element={<AuthentificationPage/>} />
        <Route  path='*' element={<p>Nothing Here Yet Buddy</p>} />
        </Routes>
        </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  

})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
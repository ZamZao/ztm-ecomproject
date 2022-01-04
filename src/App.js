import React, { Component } from 'react'
import HomePage from './pages/HomePage';
import { GlobalStyle } from './components/styled-components/GlobalStyle';
import ShopPage from './components/ShopPage/ShopPage';

import { connect } from 'react-redux';

import { Routes,Route, Navigate} from 'react-router-dom';
import Header from './components/header/Header';
import AuthentificationPage from './pages/AuthentificationPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';






class App extends Component {    

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  
            render() {
              const {currentUser} = this.props;
              return (
                <>
        <GlobalStyle/>
        <Header/>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route exact path='/shop/*' element={<ShopPage/>}/>
        <Route exact path='/checkout' element={<CheckoutPage/>} />
        <Route exact path='/signin' element={
        currentUser ? <Navigate to="/shop"/> : <AuthentificationPage/> 
        } />
        <Route  path='*' element={<p>Nothing Here Yet Buddy</p>} />
        </Routes>
        </>
    )
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps,
  mapDispatchToProps
  )
  (App);
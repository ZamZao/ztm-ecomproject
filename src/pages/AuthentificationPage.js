import React from 'react'
// import { useNavigate } from 'react-router-dom'
import SignInComponent from '../components/authentification/SignInComponent'
import SignUpComponent from '../components/authentification/SignUpComponent'
import { StyledAuthentificationPage } from './StyledAuthentificationPage'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../redux/user/user.selectors'



const AuthentificationPage = ({currentUser}) => {

    console.log(currentUser);
    
    return (
        <StyledAuthentificationPage>
            <div className="">{currentUser}</div>
            <SignInComponent/>
            <SignUpComponent/>

        </StyledAuthentificationPage>
    )
}

const mapStateToProps = createStructuredSelector({
    curentUser: selectCurrentUser,
}
)

export default connect(mapStateToProps)(AuthentificationPage)

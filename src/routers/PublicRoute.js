import React from "react";
import PropTypes from 'prop-types'

import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
  }) => {
  
    return (
      <Route {...rest}
        component={ (props) =>(
          (isAuthenticated)
            ?(<Redirect to='/'/>)
            :(<Component {...props}/>)
        )}
        />
    )
  }

  PublicRoute.propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired
  }






















// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { LoginScreen } from "../components/auth/LoginScreen";


// export const PublicRoute = ({children}) => {

//   const {user} = useContext(LoginScreen)


//   return user.logged
//     ? <Navigate to='/auth'/>
//     : children 
    
// };
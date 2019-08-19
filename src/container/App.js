/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Horizontal Layout
import HorizontalLayout from './HorizontalLayout';

//Agency Layout
import AgencyLayout from './AgencyLayout';

//Main App
import RctDefaultLayout from './DefaultLayout';

// boxed layout
import RctBoxedLayout from './RctBoxedLayout';
// CRM layout
import CRMLayout from './CRMLayout';
import AppSignIn from './Signin';
import AppSignUp from './Signup';
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
// const checkAuth = () => {
//    console.log(localStorage.getItem('token'));
//    if (localStorage.getItem('token') !== null) return true;
//    return false;
//  }
const InitialPath = ({ component: Component, ...rest, authUser }) =>
   <Route
      {...rest}
      render={props =>
        authUser
        //checkAuth()
            ? <Component {...props} />
            : <Redirect
               to={{
                  pathname: '/signin',
                  state: { from: props.location }
               }}
            />}
   />;

class App extends Component {
   render() {
      const { location, match, user } = this.props;
      console.log(this.props.user);
      
      if (location.pathname === '/') {
         if (user === 'undefined') {
            return (<Redirect to={'/signin'} />);
         } else {
            return (<Redirect to={'/app/dashboard/ecommerce'} />);
         }
      }
      return (
         <RctThemeProvider>
            <NotificationContainer />
            <InitialPath
               path={`${match.url}app`}
               authUser={user}
               component={RctDefaultLayout}
            />
            <Route path="/horizontal" component={HorizontalLayout} />
            <Route path="/agency" component={AgencyLayout} />
            <Route path="/boxed" component={RctBoxedLayout} />
            <Route path="/dashboard" component={CRMLayout} />
            <Route path="/signin" component={AppSignIn} />
            <Route path="/signup" component={AppSignUp} />
         </RctThemeProvider>
      );
   }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user } = authUser;
   return { user };
};

export default connect(mapStateToProps)(App);

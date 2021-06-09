import React from 'react';
import store from "./redux/redux-store";
import { BrowserRouter, HashRouter, Route, withRouter } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import News from './components/news/News';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import {initializeApp} from'./redux/app-reducer';
import {compose} from 'redux';
import Preloader from './components/common/preloader/preloader';
import {Provider} from 'react-redux';
import { Suspense } from 'react';
import { withSuspense } from './hoc/withAuthSuspense';

// import ProfileContainer from './components/profile/profileContainer';
// import DialogsContainer from './components/dialogs/DialogsContainer';
// lazy load
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));


class App extends React.Component  {
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if (!this.props.initialized) {
       return <Preloader />
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render = { withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render = { withSuspense(ProfileContainer)} />
            <Route path="/news" render = {() => <News />} />
            <Route path="/music" render = { () => <Music /> } />
            <Route path="/users" render = { () => <UsersContainer /> } />
            <Route path="/settings" render = { () => <Settings /> } />
            <Route path="/login" render = { () => <Login /> } />
          </div>
        </div>
    
  );
  }
}

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
   return <HashRouter>
        <Provider store={store}>
          <AppContainer />
        </ Provider >
    </HashRouter>
}
export default SamuraiJSApp;
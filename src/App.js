import './App.css';
import News from '../src/components/News/News';
import Settings from '../src/components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withRouter from './components/withRouter';
import HeaderContainer from '../src/components/Header/HeaderContainer'
import { InitializeApp } from './Redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(() => import('../src/components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../src/components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('../src/components/Login/Login'));
const UsersContainer = React.lazy(() => import('../src/components/Users/UsersContainer'));
const FriendsContainer = React.lazy(() => import('../src/components/Friends/FriendsContainer'));


class App extends React.Component {

  componentDidMount() {
    this.props.InitializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='General'>
        <HeaderContainer />
        <div className='main'>
          <Suspense fallback={<div><Preloader/></div>}>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/friends' element={<FriendsContainer />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { InitializeApp })
)(App)

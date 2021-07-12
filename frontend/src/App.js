import './style/style.css'
import './style/bootstrap.css'
import NavBar from './NavBar'
import React from 'react'
import ShopsContainer from './shops/ShopsContainer';
import {Route, Switch} from 'react-router-dom'
import HomePage from './homepage/HomePage'


function App () {
    return (
      <>
      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light"><NavBar /></nav>
        </div>
      </header>
    
      <Switch>
        <Route path='/shops' render={routerProps => <ShopsContainer {...routerProps} />} />
        <Route path='/' render={() => <HomePage />} />
      </Switch>
      </>  
    )
}
export default App;

import './style/style.css'
import './style/bootstrap.css'
import NavBar from './NavBar'
import React from 'react'
import ShopsContainer from './shops/ShopsContainer';
import {Route, Switch} from 'react-router-dom'


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
      </Switch>
      </>  
    )
}
export default App;

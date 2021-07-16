import './style/style.css'
import './style/bootstrap.css'
import NavBar from './NavBar'
import City from './City'
import React from 'react'
import ShopsContainer from './shops/ShopsContainer';
import {Route, Switch} from 'react-router-dom'
import HomePage from './homepage/HomePage'
import CityContainer from './CityContainer'


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
        <Route exact path='/' render={routerProps => <HomePage {...routerProps}/>} />
        <Route path='/city' render={routerProps => <City {...routerProps}/>} />
        <Route path='/boston/shops' render={() => <CityContainer city="Boston"/>} />
        <Route path='/newyork/shops' render={() => <CityContainer city="New York"/>} />
        <Route path='/sanfrancisco/shops' render={() => <CityContainer city="San Francisco"/>} />
        <Route path='/seattle/shops' render={() => <CityContainer city="Seattle"/>} />
      </Switch>
      </>  
    )
}
export default App;

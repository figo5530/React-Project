import './style/style.css'
import './style/bootstrap.css'
import NavBar from './NavBar'
import React from 'react'
import ShopInput from './shops/ShopInput';
import ShopsContainer from './shops/ShopsContainer';

function App () {
    return (
      <>
      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light"><NavBar /></nav>
        </div>
      </header>
      
      <div className="whole-wrap">
        <div className="container">
          <div className="section-top-border">
            <ShopInput />
          </div>
          <div className="section-top-border">
            <ShopsContainer />
          </div>
          

        </div>
      </div>
      </>  
    )
}
export default App;

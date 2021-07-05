import './style/style.css'
import NavBar from './NavBar'
import React from 'react'
import ShopInput from './shops/ShopInput';
import ShopsContainer from './shops/ShopsContainer';

function App () {
    return (
      <div className="whole-wrap">
        <div className="container">
          <NavBar />
          <div className="section-top-border">
            <ShopInput />
          </div>
          <div className="section-top-border">
            <ShopsContainer />
          </div>
          

        </div>
      </div>
    )
}
export default App;

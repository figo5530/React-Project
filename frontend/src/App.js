import './style/style.css'
import NavBar from './NavBar'
import React from 'react'
import ShopInput from './shops/ShopInput';

function App () {
    return (
      <div className="whole-wrap">
        <div className="container">
          <NavBar />
          <div className="section-top-border">
            <ShopInput />
          </div>
          
          
        </div>
      </div>
    )
}
export default App;

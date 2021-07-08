import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchShops from '../actions/fetchShops'
import Shops from './Shops'
import ShopInput from './ShopInput'
import { Route } from 'react-router'
import ShopDetail from './ShopDetail'

class ShopsContainer extends Component {
    componentDidMount() {
        this.props.fetchShops()
    }

    render() {
        return (
        <div className="whole-wrap">
            <div className="container">
                <div className="section-top-border">
                    <ShopInput />
                </div>
                <div className="section-top-border">
                    <Route exact path={this.props.match.url} render={() => <Shops />}/>
                    <Route exact path={`${this.props.match.url}/:id`} render={(routerProps) => <ShopDetail {...routerProps}/>}/>
                </div>
             </div>
        </div>
        )
    }
}

export default connect(null, {fetchShops})(ShopsContainer)
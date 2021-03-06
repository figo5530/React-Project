import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchShops from '../actions/fetchShops'
import Shops from './Shops'
import ShopInput from './ShopInput'
import { Route } from 'react-router'
import ShopDetail from './ShopDetail'

class ShopsContainer extends Component {

    state = {
        searchTerm: ''
    }

    setSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    // setSearchTerm = (searchTerm) => {
    //     this.setState(function(prevState, props) {
    //         return {searchTerm: prevState.searchTerm}
    //     })
    // }

    componentDidMount() {
        this.props.fetchShops()
    }

    render() {
        return (
        <div className="whole-wrap">
            <div className="container">
                <div className="section-top-border">
                    <Route exact path='/shops' render={() => <ShopInput handleSetSearchTerm={this.setSearchTerm}/>}/>
                </div>
                <div className="section-top-border">
                    <Route exact path={this.props.match.url} render={() => <Shops searchTerm={this.state.searchTerm}/>}/>
                    <Route exact path={`${this.props.match.url}/:id`} render={(routerProps) => <ShopDetail {...routerProps}/>}/>
                </div>
             </div>
        </div>
        )
    }
}

export default connect(null, {fetchShops})(ShopsContainer)
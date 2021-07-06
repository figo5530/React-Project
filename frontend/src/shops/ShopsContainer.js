import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchShops from '../actions/fetchShops'
import Shops from './Shops'

class ShopsContainer extends Component {
    componentDidMount() {
        this.props.fetchShops()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/shops">
                        <Shops />
                    </Route>
                </Switch>
            </>
        )
    }
}

export default connect(null, {fetchShops})(ShopsContainer)
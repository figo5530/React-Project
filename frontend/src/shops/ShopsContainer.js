import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchShops from '../actions/fetchShops'

class ShopsContainer extends Component {
    componentDidMount() {
        this.props.fetchShops()
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect(null, {fetchShops})(ShopsContainer)
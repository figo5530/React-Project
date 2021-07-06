import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'

class Shops extends Component {
    render() {
        return (
            <ul>
                {this.props.shops.map(shop => <Shop shop={shop}/>)}
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {shops: state.shops}
}

export default connect(mapStateToProps)(Shops)
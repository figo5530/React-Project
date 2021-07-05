import React, { Component } from 'react'
import { connect } from 'react-redux'

class Shops extends Component {
    render() {
        return (
            <ul>
                {this.props.shops.map(shop => <li key={shop.id}>{shop.name}</li>)}
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {shops: state.shops}
}

export default connect(mapStateToProps)(Shops)
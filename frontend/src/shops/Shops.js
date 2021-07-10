import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'
import { Link } from 'react-router-dom'

class Shops extends Component {
    render() {
        return (
            <ul>
                {this.props.shops.filter(shop => shop.id <= 30).map(shop => <Link to={`/shops/${shop.id}`}><Shop shop={shop}/></Link>)}
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {shops: state.shops}
}

export default connect(mapStateToProps)(Shops)
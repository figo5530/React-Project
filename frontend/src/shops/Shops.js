import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'
import { Link } from 'react-router-dom'

class Shops extends Component {
    render() {
        if (this.props.searchTerm === '') {
            return (
                <ul>
                    {this.props.shops.filter(shop => shop.id <= 30).map(shop => <Link key={shop.id} to={`/shops/${shop.id}`}><Shop key={shop.id} shop={shop} /></Link>)}
                </ul>
            )
        }
        else {
            return (
                <ul>
                    {this.props.shops.filter(shop => shop.name.includes(this.props.searchTerm)).map(shop => <Link key={shop.id} to={`/shops/${shop.id}`}><Shop key={shop.id} shop={shop} /></Link>)}
                </ul>
            )
        }
    }
}
const mapStateToProps = state => {
    return {shops: state.shops}
}

export default connect(mapStateToProps)(Shops)
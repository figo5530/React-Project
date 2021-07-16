import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'
import { Link } from 'react-router-dom'

class Shops extends Component {

    returnShopsArr = () => {
        if (this.props.searchTerm === '') {
            return this.props.shops
        } else {
            return this.props.shops.filter(shop => shop.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
        }
    }

    render() {
        const shopArr = this.returnShopsArr()
        return (
            shopArr.length > 0 ? <ul>
            {shopArr.map(shop => <Link key={shop.id} to={`/shops/${shop.id}`}><Shop key={shop.id} shop={shop} /></Link>)}
            </ul> : <div><p>Sorry that we couldn't find the right match for you. Please return and try again.</p></div>
        )
    }

    // render() {
    //     if (this.props.searchTerm === '') {
    //         return (
    //             <ul>
    //                 {this.props.shops.map(shop => <Link key={shop.id} to={`/shops/${shop.id}`}><Shop key={shop.id} shop={shop} /></Link>)}
    //             </ul>
    //         )
    //     }
    //     else {
    //         return (
    //             <ul>
    //                 {this.props.shops.filter(shop => shop.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())).map(shop => <Link key={shop.id} to={`/shops/${shop.id}`}><Shop key={shop.id} shop={shop} /></Link>)}
    //             </ul>
    //         )
    //     }
    // }
}
const mapStateToProps = state => {
    return {shops: state.shops}
}

export default connect(mapStateToProps)(Shops)
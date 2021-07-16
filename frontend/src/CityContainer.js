import React, {Component} from 'react'
import { connect } from 'react-redux'
import fetchShops from './actions/fetchShops'
import Shop from './shops/Shop'
import { Link } from 'react-router-dom'
class CityContainer extends Component {

    componentDidMount() {
        this.props.fetchShops()
    }

    render() {
        return(
            <div className="whole-wrap">
            <div className="container">
                
                <div className="section-top-border">
                    <h3 className="title_color">Welcome to {this.props.city}</h3>
                </div>
                <div className="section-top-border">
                    {this.props.shops.filter(shop => shop.city === this.props.city).map(shop => <Link key={shop.id} to={`/shops/${shop.id}`}><Shop key={shop.id} shop={shop} /></Link>)}
                </div>
             </div>
        </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {shops: state.shops}
}
export default connect(mapStateToProps,{fetchShops})(CityContainer)
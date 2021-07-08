import React from 'react'
import {useSelector} from 'react-redux'
import Shop from './Shop'


export default function ShopDetail(props) {
    const shops = useSelector(function(state) {return state.shops})
    const shop = shops.find(shop => shop.id === parseInt(props.match.params.id))
    if (shop !== undefined) {
        return (
            <>
                <Shop shop={shop}/>
                <div className="section-top-border">
						<h3 class="mb-30 title_color">Reviews</h3>
						<div class="row">
							<div class="col-md-3">
                                User Name
							</div>
							<div class="col-md-9 mt-sm-20 left-align-p">
                                Actual commets
							</div>
						</div>
                </div>
            </>
        )
    }else {
        return <div>Not Found</div>
    }
}
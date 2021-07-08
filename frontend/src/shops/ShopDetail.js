import React from 'react'
import {useSelector} from 'react-redux'
import Shop from './Shop'
import ReviewsContainer from '../reviews/ReviewsContainer'


export default function ShopDetail(props) {
    const shops = useSelector(function(state) {return state.shops})
    const shop = shops.find(shop => shop.id === parseInt(props.match.params.id))
    if (shop !== undefined) {
        return (
            <>
                <Shop shop={shop}/>
                <ReviewsContainer reviews={shop.reviews}/>
        
                
            </>
        )
    }else {
        return <div>Loading</div>
    }
}
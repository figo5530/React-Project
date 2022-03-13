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
                <ReviewsContainer shop={shop}/>
            </>
        )
    }else {
        return <div>Couldn't find the right match for you, please try again.</div>
    }
}
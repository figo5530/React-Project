export default function manageShop (state={ shops: [] },action) {
    switch (action.type) {
        case "FETCH_SHOPS":
            return {shops: action.payload}

        case "DELETE_REVIEW":
            const deleteReivewShop = state.shops.find(s => s.id === action.payload.shopId)
            deleteReivewShop.reviews = deleteReivewShop.reviews.filter(r => r.id !== action.payload.reviewId)
            return {shops: [...state.shops], deleteReivewShop}

        case "ADD_REVIEW":
            const updatedShop = state.shops.find(shop => shop.id === action.payload.shop.id)
            updatedShop.reviews = [...updatedShop.reviews, action.payload]
            // return {shops: state.shops.map(shop => shop.id === updatedShop.id ? updatedShop : shop)}
            return {shops: [...state.shops], updatedShop}
        default:
            return state
    }
    
}
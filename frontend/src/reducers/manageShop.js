export default function manageShop (state={ shops: [] },action) {
    switch (action.type) {
        case "FETCH_SHOPS":
            return {shops: action.payload}
        case "ADD_REVIEW":
            const updatedShop = state.shops.find(shop => shop.id === action.payload.shop.id)
            console.log(updatedShop)
            updatedShop.reviews = [...updatedShop.reviews, action.payload]
            console.log(updatedShop.reviews)

            return {shops: state.shops.map(shop => shop.id === updatedShop.id ? updatedShop : shop)}
        default:
            return state
    }
    
}
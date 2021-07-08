export default function manageShop (state={ shops: [] },action) {
    switch (action.type) {
        case "FETCH_SHOPS":
            return {shops: action.payload}

        case "DELETE_REVIEW":
            //to be finished
            return state
        case "ADD_REVIEW":
            console.log(action.payload)
            const updatedShop = state.shops.find(shop => shop.id === action.payload.shop.id)
            updatedShop.reviews = [...updatedShop.reviews, action.payload]
            console.log(state.shops)
            return {shops: state.shops.map(shop => shop.id === updatedShop.id ? updatedShop : shop)}
        default:
            return state
    }
    
}
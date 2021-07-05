export default function manageShop (state={ shops: [] },action) {
    switch (action.type) {
        case "FETCH_SHOPS":
            return {shops: action.payload}
        default:
            return state
    }
    
}
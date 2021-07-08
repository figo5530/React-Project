export default function deleteReview(rId, sId) {
    return function(dispatch) {
        fetch(`http://localhost:3001/reviews/${rId}`, {
        method: "DELETE",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        }).then(r => r.json())
        .then(review => {
            if (review.message === "Success!") {
                dispatch({type:"DELETE_REVIEW", payload: {reviewId: rId, shopId: sId}})
            }
        })
    }
}
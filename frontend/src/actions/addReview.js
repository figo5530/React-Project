export default function addReview(review) {

    return function(dispatch) {
      fetch("http://localhost:3001/reviews", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({review: review})
        }).then(r => r.json())
        .then(review => {
        dispatch({type: "ADD_REVIEW", payload: review})
        })
    }
}
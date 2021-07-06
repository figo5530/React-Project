export default function fetchShops() {
    return (dispatch) => {
      fetch("http://localhost:3001/shops")
      .then(resp => resp.json())
      .then((shopsArray) => {
        dispatch({type: "FETCH_SHOPS", payload: shopsArray})
      })
    }
  }
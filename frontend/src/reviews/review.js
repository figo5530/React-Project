import React from 'react'

const Review = (props) => {

    
    return (
        <>
        <div className="row">
                <div className="col-md-3"><p>Anonymous User</p></div>
                <div className="col-md-6 mt-sm-20 left-align-p"><p>{props.review.content}</p></div>
                <div className="col-md-3">
                    <button
                    onClick={() => {
                        //to be finished
                        
                    }} 
                    className="genric-btn success radius">
                        Delete
                    </button>
                </div>
        </div>
        <div className="row"><p></p></div>
        </> 
    )
}

export default Review
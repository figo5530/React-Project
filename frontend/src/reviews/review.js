import React from 'react'

const Review = (props) => {
    return (
        <div className="row">
                <div className="col-md-3"><p>Anonymous User</p></div>
                <div className="col-md-9 mt-sm-20 left-align-p">{props.content}</div>
        </div>
    )
}

export default Review
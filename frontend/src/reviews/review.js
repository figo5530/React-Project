import React, {Component} from 'react'

class Review extends Component {

    handleClick = e => {
        this.props.deleteReview(this.props.review.id, this.props.shopId)
    }

    render() {
        return (
            <>
            <div className="row" >
                    <div className="col-md-3"><p>Anonymous User</p></div>
                    <div className="col-md-6 mt-sm-20 left-align-p"><p>{this.props.review.content}</p></div>
                    <div className="col-md-3">
                        <button
                        onClick={this.handleClick} 
                        className="genric-btn success radius">
                            Delete
                        </button>
                    </div>
            </div>
            <div className="row"><p></p></div>
            </> 
        )
    }
}
export default Review
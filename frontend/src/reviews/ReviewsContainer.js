import React, { Component } from 'react'
import Review from './review'
class ReviewsContainer extends Component {
    
    renderReivew = this.props.reviews.map(r => <Review content={r.content} />)

    render(){
        return (
            <>
            <div className="section-top-border">
                <h3 className="mb-30 title_color">Reviews</h3>
                {this.renderReivew}
            </div>
            <div className="section-top-border">
                <h3 className="mb-30 title_color">Comment down here</h3>
                <div className="row">
                <input type='text' className="single-input" placeholder="Say something"/>
                </div>
            </div>
            </>
        )
    }
}

    
    

export default ReviewsContainer
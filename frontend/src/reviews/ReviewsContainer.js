import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reviews from './reviews'
import addReview from '../actions/addReview'
import deleteReview from '../actions/deleteReview'
import ReviewForm from './ReviewForm'

class ReviewsContainer extends Component {
    
    // renderReivew = this.props.shop.reviews.map(r => <Review deleteReview={this.props.deleteReview} shopId={this.props.shop.id} review={r} />)

    render(){
        return (
            <>
            <div className="section-top-border">
                <h3 className="mb-30 title_color">Reviews</h3>
                {console.log(this.props.shop.reviews)}
                <Reviews key={this.props.shop.id} deleteReview={this.props.deleteReview} shopId={this.props.shop.id} reviews={this.props.shop.reviews}/>
            </div>
            <div className="section-top-border">
                <h3 className="mb-30 title_color">Comment down here</h3>
                <ReviewForm shopId={this.props.shop.id} addReview={this.props.addReview}/>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        shops: state.shops
    }
}
    

export default connect(mapStateToProps, {addReview, deleteReview})(ReviewsContainer)
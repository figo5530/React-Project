import React, {Component} from 'react'
import Review from './review'

class Reviews extends Component {
    renderReivew = this.props.reviews.map(r => <Review deleteReview={this.props.deleteReview} shopId={this.props.shopId} review={r}/>)
    
    render() {
        return (
            <>
                {this.renderReivew}
            </>
        )
    }
}

export default Reviews
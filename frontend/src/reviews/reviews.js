import React, {Component} from 'react'
import Review from './review'

class Reviews extends Component {
    // renderReivew = this.props.reviews.map(r => <Review key={r.id} deleteReview={this.props.deleteReview} shopId={this.props.shopId} review={r}/>)
    // I just wanna say this is really confusing when I use this way to create component it would re-render but the new review would show up
    render() {
        return (
            <div>
                {/* {this.renderReivew} */}
                {this.props.reviews.map(r => <Review key={r.id} deleteReview={this.props.deleteReview} shopId={this.props.shopId} review={r}/>)
}
            </div>
        )
    }
}

export default Reviews
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './review'
import addReview from '../actions/addReview'
import deleteReview from '../actions/deleteReview'
class ReviewsContainer extends Component {
    
    renderReivew = this.props.shop.reviews.map(r => <Review deleteReview={this.props.deleteReview} review={r} />)

    state = {content: ''}

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    hanldeSubmit = e => {
        e.preventDefault()
        const review = {...this.state, shop_id: this.props.shop.id}
        //to be finished
        this.props.addReview(review)
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <>
            <div className="section-top-border">
                <h3 className="mb-30 title_color">Reviews</h3>
                {this.renderReivew}
            </div>
            <div className="section-top-border">
                <h3 className="mb-30 title_color">Comment down here</h3>
                <form  onSubmit={this.hanldeSubmit}>
                    <input type='text' 
                    onChange={this.handleChange}
                    value={this.state.content} 
                    placeholder="Say something"
                    className="single-input"/>
                    <p></p>
                    <input type='submit' value='submit' className="genric-btn success radius"/>
                </form>
            </div>
            </>
        )
    }
}


    

export default connect(null, {addReview, deleteReview})(ReviewsContainer)
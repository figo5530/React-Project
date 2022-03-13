import React, {Component} from 'react'

class ReviewForm extends Component {
    state = {content: ''}

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    hanldeSubmit = e => {
        e.preventDefault()
        const review = {...this.state, shop_id: this.props.shopId}
        this.props.addReview(review)
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <>
            <form onSubmit={this.hanldeSubmit}>
                <input type='text' 
                onChange={this.handleChange}
                value={this.state.content} 
                placeholder="Say something"
                className="single-input"/>
                <p></p>
                <input type='submit' value='submit' className="genric-btn success radius"/>
            </form>
            </>
        )
    }
}

export default ReviewForm
import React, { Component } from 'react';


class ShopInput extends Component {
    state = {
        text: ''
    }

    handleChange = e => {
        this.setState({
          text: e.target.value
        })
    }

    hanldeSubmit = e => {
        e.preventDefault()
        this.props.handleSetSearchTerm(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return(
        <>
            <h3>search shop</h3>
            <form id="form" onSubmit={this.hanldeSubmit}>
                <input type='text' 
                onChange={this.handleChange} 
                value={this.state.text} 
                placeholder="Please input the keyword"
                className="single-input"/>

                <input type='submit' value='submit' className="genric-btn success radius"/>
            </form>
        </>
        )
    }
}

export default ShopInput
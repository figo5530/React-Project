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
        console.log(this.state.text)
        //to be finished
        this.setState({
            text: ''
        })
    }

    render() {
        return(
        <div>
            <label>search shop</label>
            <form onSubmit={this.hanldeSubmit}>
                <input type='text' onChange={this.handleChange} value={this.state.text} placeholder="Please input the keyword"/>
                <input type='submit'/>
            </form>
        </div>
        )
    }
}

export default ShopInput
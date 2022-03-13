import React, {Component} from 'react'
class Test extends Component {

    state = {
        text: ''
    }

    handleOnchange = e => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <label>TYPE IN YOUR NAME</label>
                    <input onChange={this.handleOnchange} value={this.state.text}></input>
                </form>
                <p>You typed in {this.state.text.length} characters!</p>

            </div>
        )
    }
}

export default Test
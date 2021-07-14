import React, {Component} from "react"
import './homepageCSS.css'
class HomePage extends Component {

    hanldeSubmit = e => {
        e.preventDefault()
        this.props.history.push("/shops")
    }
    render() {
        return(
            <div id="cover">
                <form id="hp-form" onSubmit={this.hanldeSubmit}>
                    <div className="tb">
                        <div className="td">
                            <input id="hp-input" type='text' placeholder="Check it!"></input>
                        </div>
                        <div className="td" id="s-cover">
                            <button id="hp-bt" type="submit">
                                <div id="s-circle"></div>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}
export default HomePage
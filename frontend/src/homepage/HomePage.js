import React, {Component} from "react"
import './homepageCSS.css'
class HomePage extends Component {
    render() {
        return(
            <div id="cover">
                <form id="hp-form">
                    <div className="tb">
                        <div className="td">
                            <input id="hp-input" type='text' placeholder="Search"></input>
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
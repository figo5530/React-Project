import React, {Component} from 'react'


class City extends Component {
    BostonImage = require("./img/boston.jpg")
    NyImage = require("./img/newyork.jpg")
    SfImage = require("./img/sf.jpg")
    SeattleImage = require("./img/seattle.jpg")

    render(){
        return (
            <div className="whole-wrap">
            <div className="container">
            <div className="section-top-border">
						<h3 className="title_color">City Guide</h3>
						<div className="row gallery-item">
                            
							<div className="col-md-3" style={{padding: 15}}>
                            <h4 className="title_color"style={{textAlign: 'center', lineHeight: '260px'}}>Boston</h4>
							</div>
							<div className="col-md-9" style={{padding: 15}}>
                                <img alt="Boston" src={this.BostonImage} width="650" height="260"/>
							</div>

                            <div className="col-md-3" style={{padding: 15}}>
                            <h4 className="title_color"style={{textAlign: 'center', lineHeight: '260px'}}>New York</h4>
							</div>
							<div className="col-md-9" style={{padding: 15}}>
                                <img alt="Boston" src={this.NyImage} width="650" height="260"/>
							</div>

                            <div className="col-md-3" style={{padding: 15}}>
                            <h4 className="title_color"style={{textAlign: 'center', lineHeight: '260px'}}>San Francisco</h4>
							</div>
							<div className="col-md-9" style={{padding: 15}}>
                                <img alt="Boston" src={this.SfImage} width="650" height="260"/>
							</div>

                            <div className="col-md-3" style={{padding: 15}}>
                            <h4 className="title_color"style={{textAlign: 'center', lineHeight: '260px'}}>Seattle</h4>
							</div>
							<div className="col-md-9" style={{padding: 15}}>
                                <img alt="Boston" src={this.SeattleImage} width="650" height="260"/>
							</div>
						</div>
					</div>
             </div>
        </div>
        )
    }
}

export default City
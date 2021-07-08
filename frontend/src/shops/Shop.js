import React, {Component} from 'react'

export default class Shop extends Component {
    render() {
            const {id, name, address, city, state, postal_code, stars, categories} = this.props.shop
                const image = require("../img/" + id + ".jpg")

            return(
                <div className="section-top-border">
						<h3 class="mb-30 title_color">{name}</h3>
						<div class="row">
							<div class="col-md-3">
                                <img alt={name} src={image} width="200" height="200"/>
							</div>
							<div class="col-md-9 mt-sm-20 left-align-p">
								<p>{address}, {city}, {state}, {postal_code}</p>
								<p>{stars} stars, {categories}</p>
							</div>
						</div>
                </div>
            )
        }
}
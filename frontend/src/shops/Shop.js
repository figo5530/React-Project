import React, {Component} from 'react'

export default class Shop extends Component {
        render() {
            const {name, address, city, state, postal_code, stars, categories} = this.props.shop
            return(
                <div>
						<h3 class="mb-30 title_color">{name}</h3>
						<div class="row">
							<div class="col-md-3">
								Image
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
import React, { Component } from 'react';

import './ships.css';


class ShipCard extends Component {

	constructor(props){
		super(props)
		this.state = {
			...props
		}
	}

	render() { 
		console.log(this.state)
		return (
			<div className="col-sm-12 col-lg-3">
				<div className="card" >
					<div className="card-body">
						<h5 className="card-title">{this.props.data.ship_name}</h5>
						<p className="card-text">
							<label className="card-title-minus">Status</label>
							<br />
							{this.props.data.status}
							<br />
							<label className="card-title-minus">Tipo de nave</label>
							<br />
							{this.props.data.kind}
						</p>
					</div>
				</div>
			</div>
		  );
	}
}
 
export default ShipCard;
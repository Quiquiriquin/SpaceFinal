import React, { Component } from 'react';

class TripCard extends Component {

	constructor(props){
		super(props)
		this.state = {
			...props
		}
	}

	getPassengers = () => {
		let passengers = this.props.data.passengers;
		console.log(passengers)
		return passengers.map( pas => (<p>{pas.name}</p> ) )
	}

	render() { 

		
		

		return ( 
			<div className="col-sm-12 col-lg-4">
			<div className="card" >
				<div className="card-body">
					<h5 className="card-title"> <label className="card-title-minus">Nombre del vuelo</label> <br />{this.props.data.name}</h5>
					<p className="card-text">
						<label className="card-title-minus">Nave</label>
						<br />
						{this.props.data.ship.ship_name}
						<br />
						<label className="card-title-minus">Pasajeros</label>
						<br />
						{this.getPassengers()}
					</p>
				</div>
			</div>
			</div>
		 );
	}
}
 
export default TripCard;
import React, { Component } from 'react';

import './apply.css'


class SolCard extends Component {

	constructor(props){
		super(props)
		this.state = {
			...props
		}
	}

	checkStatus = (estado) =>{
		if(estado == false) {
			return ('Denegada')
		}

		return 'Aprobada';
	} 

	render() { 
		return ( 
			<div className="card" >
				<div className="card-body">
					<h5 className="card-title"><label>Solicitud</label></h5>
					<p className="card-text">
						<label className="light">ID Solicitud</label><br />
						{this.props.data.id}
						<br />
						<label className="light">Nombre del solcitante</label> <br />
						{this.props.data.user.name} <br />
						<div className="row d-flex justify-content-center mt-2">
							<div className="col-sm-12 col-lg-4 contenido">
								<label className="light">Peso</label> <br />
								{this.props.data.user.weight} <br />
							</div>

							<div className="col-sm-12 col-lg-4 contenido">
								<label className="light">Altura/cm</label> <br />
								{this.props.data.user.height} <br />
							</div>

							<div className="col-sm-12 col-lg-4 contenido">
								<label className="light">Edad</label> <br />
								{this.props.data.user.age} <br />
							</div>	
						</div>

						<hr />
		
						<div className="row">
							<div className="col-sm-12 col-lg-6 contenido">
								<label className="light">Viaje</label> <br />
								{this.props.data.travel.name} <br />
							</div>
							<div className="col-sm-12 col-lg-6 contenido">
								<label className="light">Nave</label> <br />
								{this.props.data.travel.ship.ship_name} <br />
							</div>
						</div>

						<hr />

						<label className="light">Fecha</label> <br />
						{this.props.data.date} <br />

						<div className="row">
							<div className="col-sm-12 col-lg-6 contenido">
								<label className="light">Costo</label> <br />
								{this.props.data.cost} <br />
							</div>
							<div className="col-sm-12 col-lg-6 contenido">
							<label className="light">Status</label> <br />
						{this.checkStatus(this.props.data.status)}
							</div>
						</div>

						
						
						
						<br />

					</p>
				</div>
			</div>
		 );
	}
}
 
export default SolCard;
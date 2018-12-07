import React, { Component } from 'react';
import {Query} from 'react-apollo';


import NavBar from '../Navbar/Navbar';


// Estilos
import './history.css';


const axios = require('axios');

class Historia extends Component {

	getAllMissions = () => {
		let i; 
		let missions;

		// for( i = 0; i < 90; i++){
		// 	mission = axios.get( `https://api.spacexdata.com/v3/launches/${i}`);
		// }
		axios.get('https://api.spacexdata.com/v3/launches/')
			.then( res => {
				missions = res.data;
				console.log(res.data);
				return (missions.map( mission => {return <option value={mission.id}> {mission.mission_name} </option>} ))
				
			})
			.catch(console.log('error'));
		
	}

	render() { 
		return ( 
		
		<div>
				<NavBar />
			<div className="paginaHistoria align-items-center">
			</div>
			
			<div className="container label-history">
				<div className="row d-flex justify-content-center">
					<div className="col-sm-12 text-center titleHistory">
						Historia
					</div>
				</div>	
			</div>
					
				

			<div className="container-fluid seleccion">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-sm-12 col-lg-6">
						<form>
							<div className="form-group">
								<label for="exampleFormControlSelect1">Selecciona la misión</label>
								<select className="form-control" id="exampleFormControlSelect1">
									{this.getAllMissions}
								</select>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
				{/* { console.log( axios.get('https://api.spacexdata.com/v3/launches/') ) } */}
		</div>
		 );
	}
}
 
export default Historia;
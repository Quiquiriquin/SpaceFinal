import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation, Query} from 'react-apollo';
import NavBar from '../Navbar/Navbar';
import Loader from 'react-loaders';

import './apply.css';
import Footer from '../Footer/Footer';
import Info from './info';


const MUTATION_NEW = gql`
	mutation newAppliance( $name: String !, $id: String!){
		newAppliance(
			name: $name
			id : $id
		){
			id
			user{
				id
				name
			}
			travel{
				name
				ship{
					ship_name
				}
			}
			date
			cost
			status
		}
	}
`

const QUERY_USER = gql`
	query{
		me{
			id
			name
			age
			weight
			height
		}
	}
`

const QUERY_FLIGHTS = gql`
	query{
		flights{
			name
		}
	}
`

class NuevaSoliciutd extends Component {

	constructor(props){
		super(props)
		this.state = {
			'name' : ''
		}
	}

	getFlightsOptions = () => (
		<Query query={QUERY_FLIGHTS}>
			{
				({loading, error, data}) => {
					if(loading) return (<h3>Cargando opciones</h3>);
					if(error) return (<h3>No hay opciones</h3>);
					let opcion = data.flights.map ( op => (<option value={op.name}>{op.name}</option>))
					return opcion;
				}
			}
		</Query>
	)

	getUserInfo = () => (
		<Query query={QUERY_USER}>
			{
				({loading, error, data}) => {
					if(loading) return (<Loader type="ball-grid-pulse" />);
					if(error) return (<h3>Error en servicio</h3>);
					return (<Info  data={data}/>)
				}
			}
		</Query>
	)

	onInputChange = (e) => {
		let {name, value} = e.target;
		this.setState({
			[name] : value
		}, () => console.log(this.state))
	}

	onFormSubmit = (e, apply) => {
		e.preventDefault();
		console.log('Nuevo vuelo en proceso');
		console.log(this.state);
		apply({
			variables:{
				name:this.state.name,
				id : ''
			}
		})
		.then( response => {
			console.log(response);
			console.log("Nueva solicitud lista")
			this.props.history.push('/gracias')
			//alert('todo chido')
		})
		.catch( err => {
			console.log(err);
			console.log('No hay nueva solicitud');
		})
		}

	render() { 

		return ( 
			<div className="body">
				<NavBar />
				
				<Mutation mutation={MUTATION_NEW}>
					{
						(apply, data) => (
						<div className="col-sm-12 col-lg-4 mr-auto ml-auto">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Nueva Soliciutd</h5>
								<form onSubmit={(e) => this.onFormSubmit(e, apply)}>

										<div class="form-group">
											<label for="exampleFormControlSelect1">Elige un viaje</label>
											<select class="form-control" id="name" name="name" onChange={this.onInputChange}>
											{this.getFlightsOptions()}
											</select>
										</div>

										{this.getUserInfo}

										<div className="text-center">
											<button type="submit" class="btn btn-primary regis">Registrarme</button>
										</div>
										
										</form>
							</div>
							</div>
							</div>
						)}
				</Mutation>

				<Footer />
			</div>
		 );
	}
}
 
export default NuevaSoliciutd;
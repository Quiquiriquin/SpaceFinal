import React, { Component } from 'react';
import gql from 'graphql-tag';
import NavBar from '../Navbar/Navbar';
import {Mutation, Query,renderToStringWithData} from 'react-apollo';

import './viajes.css';
import TripCard from './trip';
import Footer from '../Footer/Footer';
import Load from '../Loader/Load';
import Loader from 'react-loaders';

import 'loaders.css/src/animations/ball-grid-pulse.scss';

const QUERY_VIAJES = gql`
	query{
		myFlights{
			name
			ship{
				ship_name
			}
			passengers{
				name
				applications{
					cost
					date
				}
			}
		}
	}
`

class Viajes extends Component {

	getAllFlights = () => (

		<Query query={QUERY_VIAJES}>
			{
				({loading, error, data}) => {
					if(loading) return ( <div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><Loader type="ball-grid-pulse" /> </div>)
					if(error) return (<div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><h2>No hay viajes aún</h2></div>);
					let vuelo = data.myFlights.reverse().map( vuel => (<TripCard data={vuel} /> ));
					return vuelo;
					}
			}
		</Query>
	)

	render() { 
		return ( 

			<div className="body">
				<NavBar />

				<div className="container vuelos">
					<div className="row d-flex justify-content-center mb-5">
						<div className="col-sm-12 text-center">
							<h2>Estos son tus viajes</h2>
						</div>
					</div>

					<div className="row d-flex justify-content-center mb-5">
						{this.getAllFlights()}
					</div>
				</div>

				<Footer />
			</div>


		);
	}
}
 
export default Viajes;
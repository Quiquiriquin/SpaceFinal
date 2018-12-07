import React, { Component } from 'react';
import gql from 'graphql-tag';
import NavBar from '../Navbar/Navbar';
import {Mutation, Query,renderToStringWithData} from 'react-apollo';

import './apply.css';
import SolCard from './SolCard';
import Footer from '../Footer/Footer';
import NuevaSoliciutd from './new';
import {Link} from 'react-router-dom';
import Loader from 'react-loaders';


const QUERY_APPLIANCES = gql`
	query{
		myAppliances{
			id
			user{
				name
				age
				weight
				height
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

const QUERY_FLIGHTS = gql`
	query{
		flights{
			name
		}
	}
`


class MyAppliances extends Component {

	getAllAppliances = () => (
		<Query query={QUERY_APPLIANCES}>
			{
				({loading, error, data}) => {
					if(loading) return (<div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><Loader type="ball-grid-pulse" /> </div>);
					if(error) return (<div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><h2>Aún no hay solicitudes registradas</h2></div>);
					let sol = data.myAppliances.map( soli => (
						<div className="col-sm-12 col-lg-4 centrar">
							<SolCard data={soli} />
						</div>))
					return sol;
				}
			}
		</Query>
	)

	newAppliance = (e) => (
		<NuevaSoliciutd />
	)
	
	render() { 
		return ( 
			<div className="body">
				<NavBar />
				<div className="container special">
					<div className="row d-flex justify-content-center">
						{this.getAllAppliances()}
					</div>

				<div className="centrar">
					<Link to="/nueva">
						<div className="btn btn-primary boton" onClick={this.newAppliance}>
							NUEVA SOLICITUD
						</div>
					</Link>
				</div>
				</div>
				<Footer />
			</div>
		 );
	}
}
 
export default MyAppliances;
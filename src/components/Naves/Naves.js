import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import gql from 'graphql-tag';
import {Mutation, Query} from 'react-apollo';
import Loader from 'react-loaders';




import './ships.css';
import ShipCard from './ShipCard';
import Footer from '../Footer/Footer';


const QUERY_SHIPS = gql`
	query{
		allShips{
			kind
			status
			ship_name
		}
	}
`

class Naves extends Component {

	getAllShips = () => (
		<Query query={QUERY_SHIPS}>
			{
				({loading, error, data}) => {
					if(loading) return ( <div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><Loader type="ball-grid-pulse" /> </div>)
					if(error) return (<div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><h2>Aún no hay naves registradas</h2></div>);
					let nave = data.allShips.reverse().map ( nav => (<ShipCard data={nav} />));
					return nave;
				}
			}
		</Query>
	)


	render() { 
		return ( 
			<div className="bdy-naves">
				<NavBar />
				<div className="container text-center">
					<label className="mb-5"> <h3>ESTAS SON TODAS NUESTRAS NAVES</h3> </label>
					<br />
					<div className="row d-flex justify-content-center">
						{this.getAllShips()}
					</div>
				</div>
				<Footer />
			</div>
		 );
	}
}
 
export default Naves;
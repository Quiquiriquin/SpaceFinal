import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import {Mutation, Query,renderToStringWithData} from 'react-apollo';
import MeIcon from '../MeIcon/MeIcon';
import Loader from 'react-loaders';

import './styles.css';
import logo from '../img/logo.png';

import isAuthenticated from '../../resolvers/isAuthenticated';
import Register from '../RegisterButtons/RegisterButtons';


const GET_ME = gql`
	query{
		me{name
		email
		age
		height
		weight
		profile_pic
	}
	}
`

class NavBar extends Component {

	render() { 
		return ( 
			<nav className="navbar navbar-expand-lg navbar-light navBar navbar-fixed-top">
			<a className="navbar-brand" href="#">
				<Link to="/"><img src={logo} className="logo"></img></Link>
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<Link to="/" className="nav-link">Inicio</Link>
				</li>
				{/* <li className="nav-item">
					<Link to='/historia' className="nav-link">Historia</Link>
				</li> */}
				<li className="nav-item">
					<Link to="/simulacion" className="nav-link">Simulación</Link>
				</li>
				<li className="nav-item">
					<Link to="/viajes" className="nav-link">Viajes</Link>
				</li>
				<li className="nav-item">
					<Link to="/solicitudes" className="nav-link">Solicitudes</Link>
				</li>
				<li className="nav-item">
					<Link to="/naves" className="nav-link">Naves</Link>
				</li>
				<li>
					<Query query={GET_ME}>
                                {
                                    ({loading,error,data}) => {
                                        if(loading) return ( <Loader type="ball-grid-pulse" />)
                                        if(error) return (<Register />)
                                        return (<MeIcon data={data.me}/>)
                                    }
                                }
                	</Query>
				</li>
				</ul>
			</div>
			</nav>
		);
	}
}
 
export default NavBar;
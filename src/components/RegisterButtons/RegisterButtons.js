import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Register extends Component {

	render() { 
		return ( 
			<div>
			<li className="nav-item">
				<Link to="/login" className="nav-link">Login</Link>
			</li>
			<li className="nav-item">
				<Link to="/registro" className="nav-link">Regístrate</Link>
			</li>
			</div>
		 );
	}
}
 
export default Register;
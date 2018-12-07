import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';

import './gracias.css'
import Footer from '../Footer/Footer';

class Gracias extends Component {

	constructor(props){
		super(props)
		this.state = {
			...props
		}
	}

	render() { 
		return ( 
			<div className="body">
				<NavBar />
				<div className="container gracias text-center">
					<label className="agra">¡Gracias por presentar tu solicitud!</label> <br />
					<label className="min">Pronto podrás consultar el estado de tu solicitud en la pestaña de Solcitudes</label>
				</div>

				<Footer />
			</div>
		 );
	}
}
 
export default Gracias;
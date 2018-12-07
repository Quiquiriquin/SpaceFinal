import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import './simulacion.css';

import foto1 from '../img/rocket.jpg';
import qr from '../img/qr.jpeg';

const video = require('../img/video.mp4');

class Simulacion extends Component {

	render() { 
		return ( 
			<div className="body">
				<NavBar />
				<div className="container simu">
					 Simulación
				</div>
				<div className="container simu-expl">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-sm-12 col-lg-6 align-middle">
							<div>En Space Turist nuestra prioridad es librar sus dudas respecto al vuelo. Es por eso que realizamos una simulación en Relaidad Virtual para que observes el paisaje que podrías tener al viajar con nosotros.</div>
						</div>
						<div className="col-sm-12 col-lg-6">
							<img src={foto1} />
						</div>
					</div>

					<div className="container vid">
						<iframe height="500px" width="100%" src={video}></iframe>
					</div>

					<div className="container qr mt-5">
						<div className="row d-flex justify-content-center align-items-center">

							<div className="col-sm-12 col-lg-6">
								<label className="texto-descarga">¡Descarga la aplicación para tu celular! </label>
							</div>

							<div className="col-sm-12 col-lg-6">
								<img src={qr} width="300px" />
							</div>
							
						</div>
					</div>
					
				</div>

				<Footer />
			</div>
		 );
	}
}
 
export default Simulacion;
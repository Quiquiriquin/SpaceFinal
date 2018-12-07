import React, { Component } from 'react';

import './styles.css';


class Info extends Component {


	render() { 
		return (
			<div className="info">
			<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
				<div className="container text-center contenedor" >
					<div className="title" data-aos="fade-down" data-aos-duration="2000">
						¿Qué es <i>Space Turist</i>?
					</div>
					<div className="description" data-aos="fade-up" data-aos-duration="2000">
						<i>Space Turist</i> es la primer agencia de viajes espaciales comerciales en el mundo. Contamos con los mejores y más seguros vehículos espaciales, para poderte llevar al exterior y seas testigo de la belleza de nuestro planeta como nunca antes la has visto. <br />¿Soñaste alguna ves con viajar en un cohete espacial? <br />¡Hoy es el momento de vivirlo!
					</div>
				</div>
				<div className="container contenedor2">
					<div className="iconos">
						<div className="row d-flex justify-content-center">

							<div className="col-sm-12 col-lg-4 text-center" data-aos="fade-right" data-aos-duration="3000">
								<i className="fas fa-user-plus icono"></i><br/>
								<label className="icon-title">Regístrate</label>
								<br />
								<label className="icon-description">Únete a nuestra agencia de viajes para estar al tanto de las noticias y poder viajar con nosotros en nuestros siguientes viajes.</label>
							</div> 

							<div className="col-sm-12 col-lg-4 text-center" data-aos="fade-up" data-aos-duration="3000">
								<i className="fas fa-file-signature icono"></i><br/>
								<label className="icon-title">Aplica</label>
								<br />
								<label className="icon-description">Llena tu solicitud para tener un viaje de otro mundo.</label>
							</div> 

							<div className="col-sm-12 col-lg-4 text-center" data-aos="fade-left" data-aos-duration="3000">
								<i className="fas fa-rocket icono"></i><br/>
								<label className="icon-title">Viaja</label>
								<br />
								<label className="icon-description">Revisa el resultado de tú solicitud y alístate para viajar con nosotros</label>
							</div> 
						</div>
					</div>
				</div>
				<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    			<script>AOS.init();</script>
			</div>
		  );
	}
}
 
export default Info;
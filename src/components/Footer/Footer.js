import React, { Component } from 'react';


// Estilos
import './footer.css';


// Imágenes
import logo from '../img/logo2.png';


class Footer extends Component {


	render() { 
		return ( 

			<div>
				<div className="container-fluid background">
					<div className="container">
						<div className="row d-flex justify-content-between align-items-center">
							<div className="col-sm-12 col-lg-4 text-center">
								<div className="row d-flex justify-content-between">
									<div className="col-xs-4 facebook">
										<i class="fab fa-facebook-f" ></i>
									</div>

									<div className="col-xs-4 insta">
										<i class="fab fa-instagram" ></i>
									</div>

									<div className="col-xs-4 twitter">
										<i class="fab fa-twitter"></i>
									</div>

								</div>

							</div>

							<div className="col-sm-12 col-lg-4 text-center">
								<img src={logo} className="logo" />
							</div>

							<div className="col-sm-12 col-lg-4 text-center">
								<div className="row d-flex justify-content-left">
									<div className="col-sm-12 text-right">
										Contáctanos
									</div>

									<div className="col-sm-12 text-right">
										Soporte
									</div>

									<div className="col-sm-12 text-right">
										Aviso de privacidad
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

		 );
	}
}
 
export default Footer;
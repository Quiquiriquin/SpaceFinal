import React, { Component } from 'react';
import NavBar from '../Navbar/Navbar';


import './styles.css';


import head from '../img/logo2.png';
import sep from '../img/banda.png';

import Info from '../Info/Info';
import Footer from '../Footer/Footer';




class Header extends Component {

	render() { 
		return (  
			
			<div className="head">
				<NavBar />
				<div className="container-fluid">
				<div className="band">
					<div className="row d-flex justify-content-center align-items-center reng">
						<div className="col d-lg-block d-none text-center">
							<img src={head} className="big-logo" />
						</div>
						<div className="col-sm-12 col-lg-6">
							<div className="texto">
								<label className="mayus">La primer agencia de viajes espaciales</label>
								<label className="minus">en el mundo</label><br /><label className="minuss"> (después de la NASA)</label>
							</div>
						</div>
					</div>
				</div>
				</div>
				<Info />
				<Footer />
			</div>
		);
	}
}
 
export default Header;
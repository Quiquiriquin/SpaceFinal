import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import isAuthenticated from './resolvers/isAuthenticated';
import Redirect from 'react-router-dom/Redirect';
import client from './graphql';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import Historia from './components/Historia/History';
import Viajes from './components/Viajes/Viajes';
import MyAppliances from './components/Appliances/Appliances';
import Naves from './components/Naves/Naves';
import NuevaSoliciutd from './components/Appliances/new';
import Gracias from './components/Thanks/Thanks';
import Simulacion from './components/Simulacion/Simulacion';
import Me from './components/Me/FormMe';


class Routes extends Component {
	render() { 

		const PrivateRoute = ({component:Component,...rest}) => (
            <Route {...rest} render={(props) => (
                isAuthenticated() === true
                ? <Component {...props} />
                : <Redirect to='/login'/>
            )}/>
		)
		

		return (  
			<Router>
				<ApolloProvider client={client}>
					<main>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} /> 
						<Route path="/registro" component={Registro} />
						<Route path="/historia" component={Historia} />
						<Route path='/simulacion' component={Simulacion} />
						<PrivateRoute exact path="/viajes" component={Viajes} />
						<PrivateRoute exact path="/solicitudes" component={MyAppliances} />
						<PrivateRoute exact path='/naves' component={Naves} />
						<PrivateRoute exact path='/nueva' component={NuevaSoliciutd} />
						<PrivateRoute exact path='/gracias' component={Gracias} />
						<PrivateRoute exact path='/perfil' component={Me} />
					</main>
                </ApolloProvider>
			</Router>
		);
	}
}
 
export default Routes;
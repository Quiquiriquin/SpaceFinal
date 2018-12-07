import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import * as $ from 'jquery';


// Estilos
import './login.css'


// Imágenes
import logo from '../img/logo2.png';
import User from './User';
import Admin from './Admin';


const MUTATION_LOGIN = gql`
mutation login ($email:String! ,$password:String!){
    login(
      email:$email
      password:$password
      ){
      token
      user{
        name
      }
      }
    
  }`


class Login extends Component {

	constructor(props){
		super(props)
		this.state = {
			type : '0',
			email : '',
			password : ''
		}  
	}
	
	onInputChange = (e) => {
		let {name, value} = e.target;
		this.setState({
			[name] : value
		}, () => console.log(this.state))
	}


	onFormSubmit = (event,login) => {
		event.preventDefault();
		console.log("Submit")
		console.log(this.state)
		login({
			variables:{
				email:this.state.email,
				password:this.state.password
			}
		}).then(response =>{
			console.log(response.data.login.token)
			localStorage.setItem('token',response.data.login.token)
			this.props.history.push('/')
			//alert("Ya te logeaste")
		}).catch(err => {
			console.log(err)
			alert("te equivocaste")
		})
	}

	render() { 
		return ( 
		
			<div>
				<Mutation mutation={MUTATION_LOGIN}>
			{
				(login, {data}) => (
				<div className="paginaLogin container-fluid">
					<div className="container user">
						<div className="row d-flex justify-content-center">
							<div className="col-sm-12 text-center">
								<img className="logo" src={logo} />
							</div>

							<div className="col-sm-12 col-lg-4 tarjetaLogin">
								<div className="card">
									<div className="card-body">
										<form onSubmit={(e) => this.onFormSubmit(e, login)} >
										<div class="form-group">
											<label for="exampleInputEmail1">Correo</label>
											<input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="example@spacetourist.com" 
											onChange={this.onInputChange}
											value={this.state.email}
											/>
										</div>

										<div class="form-group">
											<label for="exampleInputPassword1">Contraseña</label>
											<input type="password" class="form-control" id="password" name="password" placeholder="Password" 
											onChange={this.onInputChange}
											value={this.state.password}
											/>
										</div>

										<div className="text-center">
											<button type="submit" class="btn btn-primary regis">INGRESAR</button>
										</div>
										
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-center">
							<div className="col-sm-12 col-lg-4 cambiar">
								<button type="button" className="btn btn-primary admin" onClick={this.typeChange}>Administrador</button>
							</div>
						</div>
					</div>

				</div>
				)
			}
			</Mutation>

			</div>
			
		 );
	}
}
 
export default Login;
import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import Redirect from 'react-router-dom/Redirect';



// Estilos
import './login.css'


// Imágenes
import logo from '../img/logo2.png';


const MUTATION_LOGIN = gql`
mutation loginAdmin ($email:String! ,$password:String!){
    loginAdmin(
      email:$email
      password:$password
      ){
      token
      admin{
        name
      }
      }
    
  }`


class Admin extends Component {

	constructor(props){
		super(props)
		this.state = {
			password: '',
			email : 'enrique_administrador@gmail.com'
		}  
	}


	onInputChange = (e) => {
		let {name, value} = e.target;
		this.setState({
			[name] : value
		}, () => console.log(this.state))
	}

	onFormSubmit = (event,loginAdmin) => {
		event.preventDefault();
		console.log("Submit")
		console.log(this.state)
		loginAdmin({
			variables:{
				email: this.state.email,
				password:this.state.password
			}
		}).then(response =>{
			console.log(response.data.loginAdmin.token)
			localStorage.setItem('token',response.data.loginAdmin.token)
			this.props.history.push('/')
			
			//alert("Ya te logeaste")
		}).catch(err => {
			console.log(err)
			alert("te equivocaste")
		})
	}

	render() { 
		return ( 

			<Mutation mutation={MUTATION_LOGIN}>
			{
				(loginAdmin, {data}) => (
				<div className="paginaLogin container-fluid">
					<div className="container">
						<div className="row d-flex justify-content-center">

							<div className="col-sm-12 text-center">
								<img className="logo" src={logo} />
							</div>

							<div className="col-sm-12 tarjetaLogin">
								<div className="card">
									<div className="card-body">
										<form onSubmit={(e) => this.onFormSubmit(e, loginAdmin)} >
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
					</div>

				</div>
				)
			}
			</Mutation>
		 );
	}
}
 
export default Admin;
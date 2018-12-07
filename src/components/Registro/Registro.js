import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

// Imagenes
import logo from '../img/logo2.png'

// Estilos
import './registro.css'


const MUTATATION_REGISTRO = gql`
	mutation signup($name : String !,$email : String !,$password : String!,$age : Int !,$weight : Int !,$height : Int !){
		signup(
			email:$email
			password:$password
			name:$name
			age:$age
			height : $height
			weight : $weight
		){
		token
		user{
			name
		}
		}
	}
`

class Registro extends Component {

	constructor(props){
		super(props)
		this.state = {
			email : '',
			password : '',
			name : '',
			height : 0,
			weight : 0,
			age : 0
		}
	}

	onInputChange = (e) => {
		let {name, value} = e.target;
		this.setState({
			[name]: value
		}, () => console.log(this.state))
	}

	onFormSubmit = (e, signup) => {
		e.preventDefault();
        console.log('Ya me registré');
        console.log(this.state);
        signup({
            variables:{
                name:this.state.name,
                email:this.state.email,
				password: this.state.password,
				height : parseInt(this.state.height),
				weight: parseInt(this.state.weight),
				age: parseInt(this.state.age)
            }
        })
        .then( response => {
            console.log(response);
            console.log("Logueado")
            this.props.history.push('/login')
            //alert('todo chido')
        })
        .catch( err => {
            console.log(err);
            console.log('No logueado');
        })
	}

	render() { 
		return ( 
			<Mutation mutation={MUTATATION_REGISTRO}>
			{
				(signup, {data}) => (
				<div className="pagina container-fluid">
				
					<div className="container">
						<div className="row d-flex justify-content-center">

							<div className="col-sm-12 text-center">
								<img className="logo" src={logo} />
							</div>

							<div className="col-sm-12 col-lg-4">
								<div className="card tarjeta">
									<div className="card-body">
										<h5 className="card-title">Regístrate</h5>

										<form onSubmit={(e) => this.onFormSubmit(e, signup)}>
										<div class="form-group">
											<label >Correo</label>
											<input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="example@spacetourist.com"
											onChange={this.onInputChange}
											value ={this.state.email}
											required />
											<small id="emailHelp" class="form-text text-muted">Nunca compartiríamos tu información personal con nadie</small>
										</div>

										<div className="form-group">
											<label>Nombre completo</label>
											<input type="text" className="form-control" id="name" name="name" placeholder="Nombre" 
											onChange={this.onInputChange}
											value={this.state.name}
											/>
										</div>

										<div class="form-group">
											<label>Password</label>
											<input type="password" class="form-control" id="exampleInputPassword1" name="password"
											placeholder="Password" 
											onChange={this.onInputChange}
											value={this.state.password}
											required
											/>
										</div>

										<div className="form-group">

											<div className="row d-flex justify-content-center">
												<div className="col-sm-12 col-lg-4">
													<label>Peso/kg</label>
													<input type="number" className="form-control" id="weight" name="weight" placeholder="50 kg" 
													onChange={this.onInputChange}
													value={this.state.weight} required
													/>
												</div>

												<div className="col-sm-12 col-lg-4">
													<label>Altura/cm</label>
													<input type="number" className="form-control" id="height" name="height" placeholder="1.70m" 
													onChange={this.onInputChange}
													value={this.state.height} required
													/>
												</div>

												<div className="col-sm-12 col-lg-4">
													<label>Edad</label>
													<input type="number" className="form-control" id="age" name="age" placeholder="18" 
													onChange={this.onInputChange}
													value={this.state.age} required
													/>
												</div>
												
											</div>
										</div>
								

										<div className="text-center">
											<button type="submit" class="btn btn-primary regis">Registrarme</button>
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
 
export default Registro;
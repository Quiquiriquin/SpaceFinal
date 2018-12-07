import React, { Component } from 'react';
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import { stat } from 'fs';
import Firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import Loader from 'react-loaders';


const UPDATE = gql`
	mutation updateUser( $name : String, $height : Int, $weight : Int, $age : Int, $profile_pic: String){
		updateUser(
			name:$name
			height:$height
			weight:$weight
			age:$age
			profile_pic : $profile_pic
		){
			name
			height
			weight
			age
			profile_pic
		}
	}
`

class MeData extends Component {

	constructor(props){
		super(props)
		this.state = {
			...props.data,
			'loding' : '0'
		}

		console.log(this.state.profile_pic)

	}


	onInputChange = (e) => {
		let {name, value} = e.target;
		this.setState({
			[name] : value
		}, () => console.log(this.state));
	}

	onFormSubmit = (e, update) => {
		e.preventDefault();
		update(
			{
				variables : {
					...this.state
				}
			}
		).then(
			response => {
				this.props.history.push('/viajes');
			}
		)
		.catch(
			err => console.log(err)
		)
	}	

	uploadFile = async(filename) => {
        let url = await Firebase.storage().ref('avatars').child(filename)
            .getDownloadURL()
            this.setState({profile_pic:url})
	}
	
	handleProgress = (active) => {

		this.setState({
			'loding' : '' + active
		}) 
		console.log(active)
	}

	render() { 

		let load = this.state.loding;

		return (
			<div>

				<Mutation mutation={UPDATE}>
					{
						(update, data ) => (
						<div className="col-sm-12 col-lg-6 mr-auto ml-auto">
				<div className="card" >
					<div className="card-body">
						<h5 className="card-title"></h5>
						<p className="card-text">
						<div className="col-sm-12">
								<div className="card">
									<div className="card-body">
										<h5 className="card-title">Actualiza tu información</h5>

										<form onSubmit={(e) => this.onFormSubmit(e,update)}>

										<div className="row d-flex justify-content-center">
											<div className="col-sm-12 col-lg-5">
												<img src={this.state.profile_pic}  height="200px" width="200px"/>
											</div>
										</div>

										<div className="form-group mt-4">
											<div class="progress">
												<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width : load + '%'}}></div>
											</div>
										</div>

										<div class="form-group">
											<label >Correo</label>
											<input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="example@spacetourist.com"
											onChange={this.onInputChange}
											value ={this.state.email}
											readOnly />
										</div>

										<div className="form-group">
											<label>Nombre completo</label>
											<input type="text" className="form-control" id="name" name="name" placeholder="Nombre" 
											onChange={this.onInputChange}
											value={this.state.name}
											/>
										</div>

										<div className="form-group">

											<div className="row d-flex justify-content-center">
												<div className="col-sm-12 col-lg-4">
													<label>Peso/kg</label>
													<input type="number" className="form-control" id="weight" name="weight" placeholder="50 kg" 
													onChange={this.onInputChange}
													value={this.state.weight}
													/>
												</div>

												<div className="col-sm-12 col-lg-4">
													<label>Altura/cm</label>
													<input type="number" className="form-control" id="height" name="height" placeholder="1.70m" 
													onChange={this.onInputChange}
													value={this.state.height}
													/>
												</div>

												<div className="col-sm-12 col-lg-4">
													<label>Edad</label>
													<input type="number" className="form-control" id="age" name="age" placeholder="18" 
													onChange={this.onInputChange}
													value={this.state.age}
													/>
												</div>
												
											</div>
										</div>

										<div className="form-group">
											<label htmlForm="" className="btn btn-light">Escoger foto de perfil
											<FileUploader
												hidden
												accept="image/*"
												randomizeFilename
												storageRef={
													Firebase.storage().ref('avatars')
												}
												onProgress = {this.handleProgress}
												onUploadError = {(err) => console.log(err)}
												onUploadSuccess = {this.uploadFile}
											>

											</FileUploader>
											</label>

										</div>
								

										<div className="text-center">
											<button type="submit" class="btn btn-primary regis">ACTUALIZAR</button>
										</div>
										</form>
									</div>
								</div>
							</div>
						</p>
					</div>
				</div>
			</div>
						)}
				</Mutation>
				
			</div>
					
		  );
	}
}
 
export default MeData;
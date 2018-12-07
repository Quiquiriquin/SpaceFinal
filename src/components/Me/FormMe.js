import React, { Component } from 'react';
import {Query, Mutation} from 'react-apollo';
import Loader from 'react-loaders';
import gql from 'graphql-tag';
import NavBar from '../Navbar/Navbar';
import MeData from './Me';


const GET_ME = gql`
	query{
		me{
			name
			height
			weight
			age
			email
			profile_pic
		}
	}
`


class Me extends Component {

	

	render() { 
		return ( 
			<div className="body">
				<NavBar />
				<Query query={GET_ME}>
					{
						({loading, error, data}) => {
							if(loading) return ( <div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><Loader type="ball-grid-pulse" /> </div>)
							if(error) return (<div style={{minHeight : 600 + 'px' , paddingTop : 150 + 'px' }}><h2>Error en sistema, intente de nuevo</h2></div>);
							return <MeData data={data.me}/>
						}
					}
				</Query>
			</div>
		 );
	}
}
 
export default Me;
import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Mutation, renderToStringWithData} from 'react-apollo';
import FileUploader from 'react-firebase-file-uploader';
import Firebase from '../../Firebase';
import {Link} from 'react-router-dom';

class MeIcon extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : this.props.data.name,
            profile_pic: this.props.data.profile_pic
        }
        console.log(props.data.profile_pic);
    }

    render() { 
        return ( 
            <div><label>{this.state.name}</label><Link to="/perfil"><img src={this.state.profile_pic} className="img-fluid circle text-center ml-4" style={{width : 60 + 'px', height : 60 + 'px', borderRadius : 30 + 'px'}}/></Link></div>
         );
    }
}
 
export default MeIcon;
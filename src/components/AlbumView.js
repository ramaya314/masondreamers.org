import React from 'react';

import Loading from 'react-loading';

import Gallery from 'react-grid-gallery';

import { Thumbnail, Image, Col, Row, Button } from 'react-bootstrap';

import Spacer from "./Spacer";

class AlbumView extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			isLoading : true,
		}
	}   

	componentWillMount() {
		this.getFiles();
	}

	getFiles() {

		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
						(window.location.port ? ":" + window.location.port : ""));

		let action = "/GetAlbumPhotos";

		let parameters = "?albumId=" + encodeURI(this.props.album.id);

		let fullRequest = host + action + parameters;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.json().then(function(json) {


					let images = [];
					for(var i = 0; i < json.length; i++) {
						images.push({
							src: json[i].content.src,
							thumbnail: json[i].content.src,
							thumbnailWidth: parseInt(json[i].width) / 10,
							thumbnailHeight: parseInt(json[i].height) / 10
						});
					}

					console.log(images);

					that.setState({
						images : images,
						isLoading: false,
					});
				}); 
			} else if (res.status === 401) {
				console.log(res);
			}
		}, function(e) {
			console.log(e);
		});
	}

	render() {

		return(
			<div>
				<Col xs={12}>

					<h1>
						{this.props.album.title}
					</h1>

					<div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
						<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
							<Loading type='spin' color='#000' />
						</div>
					</div>

					{!this.state.isLoading && 

						<Gallery images={this.state.images} />
					}


					<Button bsStyle="primary" bsSize="large" block onClick={() => {
						window.location = '/gallery';	
					}}>Back to Gallery</Button>
				</Col>
			</div>
		);
	}
}


export default AlbumView;
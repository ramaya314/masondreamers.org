import React from 'react';

import Loading from 'react-loading';

import Spacer from "../components/Spacer";
import GalleryCollection from "../components/GalleryCollection";

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';

import { Grid, Col, Row } from 'react-bootstrap';


class GalleryPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			data: [],
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

		let action = "/GetGalleryAlbums";

		let fullRequest = host + action;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.json().then(function(json) {
					console.log(json);
					that.setState({
						data : json,
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

	  			<MainNavBar backgroundImage="/images/wallPainting.jpg" pageTitle="Gallery" />

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12}>

							<div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
								<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
									<Loading type='spin' color='#000' />
								</div>
							</div>

      						{!this.state.isLoading && 
								<GalleryCollection data={this.state.data} match={this.props.match} />
							}

						</Col>
					</Row>
				</Grid>

				<Spacer space={30} />

		  		<MainFooter />
			</div>
		);
	}
}


export default GalleryPage;



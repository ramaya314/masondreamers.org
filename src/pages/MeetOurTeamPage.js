import React from 'react';

import Loading from 'react-loading';
import Utils from '../Utils';

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';

import ReactExpandableGrid from "../components/ReactExpandableGrid";

var teamData = require("./teamData.json");

import { Grid, Col, Row } from 'react-bootstrap';

class MeetOurTeamPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true,
			teamData: null,
		}
	}   

	componentWillMount() {
		this.getData();
	}

	getStyles() {
		const styles = {
			spacer: {
				marginTop: 30,
			},
		};
		return styles;
	}

	getData() {

		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
						(window.location.port ? ":" + window.location.port : ""));

		let action = "/GetEBoardData";

		let fullRequest = host + action;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.json().then(function(json) {
					var data = Utils.prepareGSArrayForTable(json);
					that.setState({
						teamData : data,
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

		const styles = this.getStyles();

		return(

			<div>

	  			<MainNavBar backgroundImage="/images/eBoard.jpg" pageTitle="Meet Our Team" />

	  			<div style={styles.spacer} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12}>

							<div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
								<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
									<Loading type='spin' color='#000' />
								</div>
							</div>

      						{!this.state.isLoading && 
	  							<ReactExpandableGrid gridData={JSON.stringify(this.state.teamData)} />
							}

						</Col>
					</Row>
				</Grid>

	  			<div style={styles.spacer} />

		  		<MainFooter />
			</div>
		)
	}
}


export default MeetOurTeamPage;
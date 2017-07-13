import React from 'react';

import '../css/react-bootstrap-table.min.css';

import Utils from '../Utils'

import Loading from 'react-loading';

import MasonDreamersFrame from './MasonDreamersFrame';

import AdvisoryBoardEntry from './AdvisoryBoardEntry';


class AdvisoryBoardTable extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading : true,
		}
		this.getDirectory();
	}   

	componentWillMount() {
		//this.getDirectory();
	}

	getDirectory() {

		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
						(window.location.port ? ":" + window.location.port : ""));

		let action = "/GetAdvisoryBoardDirectory";

		let fullRequest = host + action;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.json().then(function(json) {
					var data = Utils.prepareGSArrayForTable(json);

					//aplhabetical sort
					data.sort(function(a, b) {
						var textA = a.Name.toUpperCase();
						var textB = b.Name.toUpperCase();
						return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
					});

					//console.log(data);
					that.setState({
						data : data,
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
      		<MasonDreamersFrame>

				<div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
					<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
						<Loading type='spin' color='#000' />
					</div>
				</div>
      			{!this.state.isLoading && 
					this.state.data.map(function(row, i) {
						return (
							<AdvisoryBoardEntry key={i} place={i + 1} name={row.Name} email={row.Email} />
						);
					})
				}
      		</MasonDreamersFrame>
		);
	}
}


export default AdvisoryBoardTable;
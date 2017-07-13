import React from 'react';

import '../css/react-bootstrap-table.min.css';

import Loading from 'react-loading';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Utils from '../Utils'

import MasonDreamersFrame from '../components/MasonDreamersFrame';

let order = 'desc';


function dateFormatter(cell, row) {
	if(!cell) return;
	var date = new Date(cell);
	return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
}

const organizations = {
  'Current GMU student': 'Current GMU student',
  'Prospective GMU student': 'Prospective GMU student',
  'GMU Faculty member/professor': 'GMU Faculty member/professor',
  'GMU Alumni': 'GMU Alumni',
  'Community Member': 'Community Member',
  'Other: Please specify': 'Other: Please specify',
};

class DACAPetitionSignaturesPage extends React.Component
{


	constructor(props) {
		super(props);
		this.state = {
			data: [],
			totalNumberOfSignatures: 0,
			isLoading : true,
		}

		this.options = {
			defaultSortName: 'Name',  // default sort column name
			defaultSortOrder: 'asc'  // default sort order
		};
	}   

	componentWillMount() {
		this.getSignatures();
		var that = this;
		setInterval(function() { that.getSignatures() }, 5000);
	}

	getSignatures() {

		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
						(window.location.port ? ":" + window.location.port : ""));

		let action = "/GetDacaPetitionSignatures";

		let fullRequest = host + action;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.json().then(function(json) {
					/* COLUMN NAMES AND INDEXES FOR DATA FOR PETITION FORM
					0 : Name
					1 : Email
					2 : Organization
					3 : I Am
					4 : I Am Specific
					*/
					var data = Utils.prepareGSArrayForTable(json);
					that.setState({
						data : data,
						totalNumberOfSignatures : data.length,
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


	handleSortClick = () => {
		if (order === 'desc') {
			this.refs.table.handleSort('asc', 'name');
			order = 'asc';
		} else {
			this.refs.table.handleSort('desc', 'name');
			order = 'desc';
		}
	}


	render() {


		return(
      		<MasonDreamersFrame>

      		<div style={{
      			padding: 15,
      			fontSize: 20,

      		}}>
      			<b>Total Number of Signatures:</b> <span>{this.state.totalNumberOfSignatures}</span>
      		</div>

				<div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
					<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
						<Loading type='spinningBubbles' color='#ccc' />
					</div>
				</div>
      			{!this.state.isLoading && 
	      			<div style={{minWidth:1100,paddingBottom:60}} >
		    			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
						<BootstrapTable data={this.state.data}  options={ this.options }  striped hover pagination>
							<TableHeaderColumn isKey dataField='id' hidden>ID</TableHeaderColumn>

							<TableHeaderColumn dataField='Name' dataSort filter={{type: 'TextFilter', delay: 500}}>Name</TableHeaderColumn>

							<TableHeaderColumn dataField='Email' dataSort filter={{type: 'TextFilter', delay: 500}}>Email</TableHeaderColumn>

							<TableHeaderColumn dataField='Organization' dataSort filter={{type: 'TextFilter', delay: 500}}>Organization</TableHeaderColumn>

							<TableHeaderColumn dataField='I am' dataSort filter={{type: 'SelectFilter', options: organizations}}>I am</TableHeaderColumn>

							<TableHeaderColumn dataField='I am specifiy' dataSort filter={{type: 'TextFilter', delay: 500}}>I am specifiy</TableHeaderColumn>

							<TableHeaderColumn dataField='Date Signed' 	dataSort dataFormat={dateFormatter} filter={{type: 'DateFilter'}}>Date Signed</TableHeaderColumn>
						</BootstrapTable>
					</div>
				}
      		</MasonDreamersFrame>
		);
	}
}


export default DACAPetitionSignaturesPage;
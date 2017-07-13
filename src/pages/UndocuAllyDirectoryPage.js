import React from 'react';

import '../css/react-bootstrap-table.min.css';

import Utils from '../Utils'

import Loading from 'react-loading';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



import MasonDreamersFrame from '../components/MasonDreamersFrame';

let order = 'desc';


class UndocuAllyDirectoryPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading : true,
		}

		this.options = {
			defaultSortName: 'Name',  // default sort column name
			defaultSortOrder: 'asc'  // default sort order
		};
	}   

	componentWillMount() {
		this.getDirectory();
	}

	getDirectory() {

		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
						(window.location.port ? ":" + window.location.port : ""));

		let action = "/GetUndocuAllyDirectory";

		let fullRequest = host + action;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.json().then(function(json) {
					var data = Utils.prepareGSArrayForTable(json);
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

				<div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
					<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
						<Loading type='spinningBubbles' color='#ccc' />
					</div>
				</div>
      			{!this.state.isLoading && 
	      			<div className="reactTableContainer" style={{paddingBottom:60}} >
						<BootstrapTable data={this.state.data}  options={ this.options }  striped hover pagination>
							<TableHeaderColumn isKey dataField='id' hidden>ID</TableHeaderColumn>

							<TableHeaderColumn dataField='Name' dataSort filter={{type: 'TextFilter', delay: 500}}>Name</TableHeaderColumn>

							<TableHeaderColumn dataField='Title' dataSort filter={{type: 'TextFilter', delay: 500}}>Title</TableHeaderColumn>

							<TableHeaderColumn dataField='Department Office' dataSort filter={{type: 'TextFilter', delay: 500}}>Department Office</TableHeaderColumn>

							<TableHeaderColumn dataField='Email' dataSort filter={{type: 'TextFilter', delay:500}}>Email</TableHeaderColumn>
						</BootstrapTable>
					</div>
				}
      		</MasonDreamersFrame>
		);
	}
}


export default UndocuAllyDirectoryPage;
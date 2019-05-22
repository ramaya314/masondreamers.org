import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {
	DataContainer,
	Utils
} from 'kokolib';

let order = 'desc';

class UndocuAllyDirectoryPage extends React.Component
{
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
			<DataContainer action="api/v1/GetUndocuAllyDirectory" 
				resultRender={function(data) {
					data = Utils.prepareGSArrayForTable(data);
					let options = {
						defaultSortName: 'Name',  // default sort column name
						defaultSortOrder: 'asc'  // default sort order
					};
					return (
		      			<div className="reactTableContainer" style={{paddingBottom:60}} >
							<BootstrapTable data={data}  options={options}  striped hover pagination>
								<TableHeaderColumn isKey dataField='id' hidden>ID</TableHeaderColumn>

								<TableHeaderColumn dataField='Name' dataSort filter={{type: 'TextFilter', delay: 500}}>Name</TableHeaderColumn>

								<TableHeaderColumn dataField='Title' dataSort filter={{type: 'TextFilter', delay: 500}}>Title</TableHeaderColumn>

								<TableHeaderColumn dataField='Department Office' dataSort filter={{type: 'TextFilter', delay: 500}}>Department Office</TableHeaderColumn>

								<TableHeaderColumn dataField='Email' dataSort filter={{type: 'TextFilter', delay:500}}>Email</TableHeaderColumn>
							</BootstrapTable>
						</div>
					);
			}}>
			</DataContainer>
		);
	}
}


export default UndocuAllyDirectoryPage;
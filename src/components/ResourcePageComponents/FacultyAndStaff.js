import React from 'react';

import {Col, Row} from 'react-bootstrap';

import {
	UrlResourceList
} from 'kokolib';

class FacultyAndStaff extends React.Component
{
	render() {
		return(
			<div>
				<Row>
					<Col xs={12}>

						<UrlResourceList action="api/v1/GetFacultyResourceLinks" />
						
					</Col>
				</Row>


			</div>
		);
	}
}


export default FacultyAndStaff;
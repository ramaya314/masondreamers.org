import React from 'react';

import Spacer from "../Spacer";

import {Col, Row, Image} from 'react-bootstrap';

import UndocuAllyDirectoryPage from'../../pages/UndocuAllyDirectoryPage'


class AllyDirectory extends React.Component
{

	render() {

		return(
			<div>

	  			<Spacer space={30} />
				<Row>
					<Col xs={12}>
						<p>
							This directory is a list of staff and community members who want to 
							serve as future resources for undocumented students. They  have received 
							the UndocuAlly training, signed the agreement, and agreed to have their 
							information listed below for students seeking support.
						 </p>

						 <p>
							 Our goal is to have three trainings per semester. If you are interested in attending one and would like to receive updates and information on upcoming trainings, 
							 please leave your name and email and we will contact you shortly.
						 </p>

						 <p>
						 </p>
					</Col>
					
				</Row>

	  			<Spacer space={30} />

				<Row>
					<Col xs={12} >
						<UndocuAllyDirectoryPage />
					</Col>
				</Row>

			</div>
		);
	}
}


export default AllyDirectory;
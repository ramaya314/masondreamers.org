import React from 'react';

import Spacer from "../Spacer";

import {Col, Row, Image} from 'react-bootstrap';

class RsvpUndocuAlly extends React.Component
{

	render() {

		return(
			<div>

	  			<Spacer space={30} />

				<Row>
					<Col xs={12}>

						If you have any questions regarding this training, 
						please feel free to contact our <b>UndocuAlly Coordinators, Fernando Acosta and Gabriel Tello</b> at 
						<a href="mailto:gmumasondreamers@gmail.com"> gmumasondreamers@gmail.com</a>
					</Col>
				</Row>

	  			<Spacer space={10} />
				<Row>
					<Col xs={12}>
						 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfafk10stnXrYQcGQlIQP3ZfBC_drCr90zn_LuUOvizuMU1WQ/viewform?embedded=true" 
						 width="100%" 
						 height="800" 
						 frameborder="0" 
						 marginheight="0" 
						 marginwidth="0"
						 style={{border:0}}
						 >
						 	Loading...
						 </iframe>
					</Col>
					
				</Row>


			</div>
		);
	}
}


export default RsvpUndocuAlly;
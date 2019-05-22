import React from 'react';

import {
	Spacer,
	PlainIconButton
} from 'kokolib';

import {Col, Row} from 'react-bootstrap';

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
						<PlainIconButton link="/events" content="Next Events" iconContent="\f133" />
					</Col>
					
				</Row>


			</div>
		);
	}
}


export default RsvpUndocuAlly;
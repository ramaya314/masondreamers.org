import React from 'react';

import MainNavBar from '../components/MainNavBar';

import {Grid, Col, Row } from 'react-bootstrap';

import {
	Spacer,
	PlainIconButton,
	EventFullView
} from 'kokolib';


class EventPage extends React.Component
{
	getStyles() {
		const styles = {
			paperStyle : {
				margin: 0,
			},
			logoStyle: {
				width: '100%',
			},

			backToContainer : {
				color: '#006940',
				fontSize: '26px',
				fontWeight: '600',
				margin: 10,
			    verticalAlign: 'bottom',
			    padding: '8px 22% 9px 15px',
			    display: 'table',
			    textDecoration: 'none',
			    ':hover': {
			    	color: '#8AB82D !important',
			    }
			},
			backToContent : {
				display: 'table-cell',
				verticalAlign: 'bottom',
				color: '#006940',
			    ':hover': {
			    	color: '#8AB82D !important',
			    }
			},
		};
		return styles;
	}

	render() {

		//const styles = this.getStyles();

		return(
      		<div>

	  			<MainNavBar backgroundImage="/images/butterUndocu.png" pageTitle="Events" />

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">

					<Row>
						<Col xs={12} >
							<Spacer space={30} />
							<PlainIconButton link="/events" content="Back to Events" iconContent="\f190" />
						</Col>
					</Row>

					<Row>
						<Col xs={12}>
							<EventFullView eventId={this.props.match.params.eventId} />
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}


export default EventPage;
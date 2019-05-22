import React from 'react';

import MainNavBar from '../components/MainNavBar';

import Paper from '@material-ui/core/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {Grid, Col, Row } from 'react-bootstrap';

import Dimensions from 'react-dimensions';

import MetaTags from 'react-meta-tags';
import {
	Spacer,
	EventListView
} from 'kokolib';

class EventsPage extends React.Component
{

  state = {
    selectedTab: 'next',
  };

  handleTabChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

	render() {

		let smallScreen = this.props.containerWidth < 768;
		let largeScreen = this.props.containerWidth >= 1200;
		let mediumScreen = !smallScreen && !largeScreen;

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/butterUndocu.png" pageTitle="Events" />

				<MetaTags>
					<title>Mason DREAMers | Events</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Past and Future Events" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Events" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/butterUndocu.png" />
				</MetaTags>

	  			<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Paper  style={{padding:15}} zDepth={3}>

						<Tabs value={this.state.selectedTab} onChange={this.handleTabChange}>
							<Tab value="next" label="Next Events" />
							<Tab value="past" label="Past Events" />
						</Tabs>

						{this.state.selectedTab === 'next' &&
							<div  style={{padding:(smallScreen ? 0 : (mediumScreen ? 15 : 30)) }}>
								<Row>
									<Col xs={12}>
										<h1>Upcoming</h1>
									</Col>
								</Row>
								<Row>
									<Col xs={12}>
										<EventListView  pastEvents={false} nextEvents={true} match={this.props.match}/>
									</Col>
								</Row>

								<Row>
									<Col>
										<h1>Calendar</h1>
									</Col>
								</Row>
								<Row>
									<iframe src="https://calendar.google.com/calendar/embed?src=gmumasondreamers%40gmail.com&ctz=America/New_York"
										style={{borderWidth:0}}
										width="100%"
										height="450px"
										frameBorder="0" scrolling="no"></iframe>
								</Row>
							</div>
						}

						{this.state.selectedTab === 'past' &&
							<div style={{padding:(smallScreen ? 0 : (mediumScreen ? 15 : 30)) }}>
								<Row>
									<Col xs={12}>
										<h1>Past</h1>
									</Col>
								</Row>
								<Row>
									<Col xs={12}>
										<EventListView pastEvents={true} nextEvents={false}  match={this.props.match}/>
									</Col>
								</Row>
							</div>
						}


					</Paper>
				</Grid>
			</div>
		);
	}
}


export default Dimensions()(EventsPage);

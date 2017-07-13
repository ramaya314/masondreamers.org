import React from 'react';

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';
import GridGallery from '../components/GridGallery';

import { Image, Grid, Col, Row } from 'react-bootstrap';

class EventsPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true,
		}
	}   


	getStyles() {
		const styles = {
			spacer: {
				marginTop: 30,
			},
		};
		return styles;
	}

	componentWillMount() {
	}

	render() {

		const styles = this.getStyles();

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/butterUndocu.png" pageTitle="Events" />

	  			<div style={styles.spacer} />
	  			
				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12} sm={6} md={8}>
							<Row>
								<Col>
									<h1> UndocuAlly Training </h1>
								</Col>
							</Row>
							<Row>
								<Col>
									<div>
										The purpose of UndocuAlly is for participants to leave this 
										training with an understanding of the history, 
										legislation and current/ future realities of our 
										undocumented student community. 
										We hope to create a more inclusive and supportive environment 
										for undocumented and students of various statuses in higher 
										education.
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs={6} sm={6} >
									<Image src="/images/UndocuAlly.png" responsive rounded/>
								</Col>
								<Col xs={6} sm={6} >
									<h2>
										Dates and Times
									</h2>
									<div>
										(Check back later)
									</div>
								</Col>
							</Row>
						</Col>
						<Col xs={12} sm={6} md={4}>

							<iframe src="https://calendar.google.com/calendar/embed?src=gmumasondreamers%40gmail.com&ctz=America/New_York" 
								style={{borderWidth:0}} 
								width="100%" 
								height="350px"
								frameborder="0" scrolling="no"></iframe>
						</Col>
					</Row>

					<Row>
						<Col>
							<h1>Past Events</h1>
						</Col>
					</Row>
					<Row>
						<GridGallery data={ {picRows: [
							{pics: [
								{source: "/images/pastEvents/md_orig.png", index:0},
								{source: "/images/pastEvents/undocuAndUnafraid.png", index:1},
								{source: "/images/pastEvents/nextSteps.jpg", index:2},
								{source: "/images/pastEvents/immMonologues.jpg", index:3},
								{source: "/images/pastEvents/comConversation.png", index:4},
								{source: "/images/pastEvents/pandaFundraiser.png", index:5}
								]
							}
						]}} opts={{
							xs:12,
							sm:6,
							md:3,
							lg:2
						}} />
					</Row>

				</Grid>


	  			<div style={styles.spacer} />

		  		<MainFooter />
			</div>
		);
	}
}


export default EventsPage;
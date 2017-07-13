import React from 'react';

import Spacer from "../components/Spacer";

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';

import { Grid, Col, Row } from 'react-bootstrap';


import TwitterTimeline from '../components/TwitterTimeline';

class NewsPage extends React.Component
{



	getStyles() {
		const styles = {
		};
		return styles;
	}


	render() {

		const styles = this.getStyles();

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/wallPainting.jpg" pageTitle="News" />

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12}  md={8}>
					        <TwitterTimeline user="MasonDREAMers" chrome="noborders noheader nofooter transparent" />
						</Col>
					</Row>
				</Grid>

				<Spacer space={30} />

		  		<MainFooter />
			</div>
		);
	}
}


export default NewsPage;
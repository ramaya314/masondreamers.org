import React from 'react';

import MainNavBar from '../components/MainNavBar';

import { Grid, Col, Row } from 'react-bootstrap';

import {
	Spacer,
	TwitterTimeline
} from 'kokolib';


class NewsPage extends React.Component
{
	render() {

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/wallPainting.jpg" pageTitle="News" />

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12}  md={2} />
						<Col xs={12}  md={8}>
					        <TwitterTimeline user="MasonDREAMers" chrome="noborders noheader nofooter transparent" />
						</Col>
						<Col xs={12}  md={2} />
					</Row>
				</Grid>
			</div>
		);
	}
}


export default NewsPage;
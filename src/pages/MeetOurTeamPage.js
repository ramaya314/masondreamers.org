import React from 'react';

import MainNavBar from '../components/MainNavBar';
import ReactExpandableGrid from "../components/ReactExpandableGrid";

import Paper from '@material-ui/core/Paper';
import { Grid, Col, Row } from 'react-bootstrap';

import MetaTags from 'react-meta-tags';
import {
	DataContainer,
	Spacer,
	Utils
} from 'kokolib';

class MeetOurTeamPage extends React.Component
{

	render() {

		return(

			<div>

	  			<MainNavBar backgroundImage="/images/eBoard.jpg" pageTitle="Meet Our Team" />

				<MetaTags>
					<title>Mason DREAMers | Meet Our Team</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Meet the Mason DREAMers" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Meet Our Team" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/eBoard.jpg" />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Paper zDepth={3}>
						<Row>
							<Col xs={12}>
								<DataContainer action="api/v1/GetEBoardData"
									resultRender={function(data) {
										data = Utils.prepareGSArrayForTable(data);
										return <ReactExpandableGrid gridData={JSON.stringify(data)} />;
								}}>
								</DataContainer>
							</Col>
						</Row>
					</Paper>
				</Grid>
			</div>
		)
	}
}


export default MeetOurTeamPage;

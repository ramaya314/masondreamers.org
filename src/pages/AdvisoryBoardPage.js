import React from 'react';

import AdvisoryBoardTable from '../components/AdvisoryBoardTable';

import MetaTags from 'react-meta-tags';
import MainNavBar from '../components/MainNavBar';

import {
	Spacer
} from 'kokolib';


import { Grid, Col, Row } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

class AdvisoryBoardPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true,
		}
	}

	render() {
		return(
      		<div>


	  			<MainNavBar backgroundImage="/images/headerBackground.jpg" pageTitle="Advisory Board" />

				<MetaTags>
					<title>Mason DREAMers | Advisory Board</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Mason DREAMers Advisory Board" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Advisory Board" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/logoWhite.png" />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Paper  style={{padding:15}} zDepth={3}>
						<Row>
							<Col xs={12} >
									<AdvisoryBoardTable />
							</Col>
						</Row>
					</Paper>
				</Grid>
      		</div>
		);
	}
}


export default AdvisoryBoardPage;

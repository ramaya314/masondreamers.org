import React from 'react';

import MainNavBar from '../components/MainNavBar';
import MetaTags from 'react-meta-tags';

import { Grid, Col, Row, Image } from 'react-bootstrap';

import Paper from '@material-ui/core/Paper';

import {
	Spacer
} from 'kokolib';


class AGLetterFullPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading : true,
		}

	}


	render() {


		return(
      		<div>
	  			<MainNavBar backgroundImage="/images/headerBackground.jpg" pageTitle="Letter to the AG Herring" />

				<MetaTags>
					<title>Mason DREAMers | Letter to the AG Herring</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Open Letter to the Attorney General Mark Herring" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Letter to the AG Mark Herring" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/logoWhite.png" />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12} >
							<Paper  style={{margin:0, width:'100%'}} zDepth={3} >
								<Image src="/images/AGHerringLetter.jpg" responsive style={{width:'100%'}}/>
							</Paper>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}


export default AGLetterFullPage;

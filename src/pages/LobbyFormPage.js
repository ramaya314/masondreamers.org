import React from 'react';

import MainNavBar from '../components/MainNavBar';

import { Grid, Col, Row } from 'react-bootstrap';

import LobbyForm from '../components/LobbyForm';

import MetaTags from 'react-meta-tags';
import {
	Spacer
} from 'kokolib';

class LobbyFormPage extends React.Component
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

	render() {

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/mkinu_3_orig.png" pageTitle="" />


				<MetaTags>
					<title>Mason DREAMers | Rapid Response</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Now, more than ever, we need to put pressure at all levels of government 
					to ensure undocumented immigrants are protected and given an opportunity 
					at pursuing their dreams. We need to continue to remain informed and engaged." />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Mason DREAMers Rapid Response Team" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/mkinu_3_orig.png"  />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12} >
							<LobbyForm />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}


export default LobbyFormPage;
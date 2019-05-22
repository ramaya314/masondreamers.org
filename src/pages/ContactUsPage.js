import React from 'react';

import MetaTags from 'react-meta-tags';
import MainNavBar from '../components/MainNavBar';

import {
	ContactForm,
	Spacer
} from 'kokolib';

import Paper from '@material-ui/core/Paper';

import { Grid, Col, Row } from 'react-bootstrap';

class ContactUsPage extends React.Component
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

	  			<MainNavBar backgroundImage="/images/expo171.jpg" pageTitle="Contact Us" />

				<MetaTags>
					<title>Mason DREAMers | Contact Us</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Contact Mason DREAMers" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Contact Us" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/expo171.jpg" />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Paper  style={{padding:15}} elevation={3}>
						<Row>
							<Col xs={12} >
								<ContactForm useRecaptcha={false} recipientEmail="gmumasondreamers@gmail.com" />
							</Col>
						</Row>
					</Paper>
				</Grid>
			</div>
		);
	}
}


export default ContactUsPage;

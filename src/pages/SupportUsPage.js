import React from 'react';
import MetaTags from 'react-meta-tags';

import MainNavBar from '../components/MainNavBar';

import { Grid, Col, Row, Image} from 'react-bootstrap';

import Paper from '@material-ui/core/Paper';

import {
	Spacer
} from 'kokolib';

class SupportUsPage extends React.Component
{

	getStyles() {
		const styles = {
			spacer: {
				marginTop: 30,
			},
		};
		return styles;
	}

	render() {

		const styles = this.getStyles();

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/shirtInTheWild1.jpg" pageTitle="Support Us" />

				<MetaTags>
					<title>Mason DREAMers | Support Us</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="How to donate to our scholarships and support our organization." />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Support Us" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/shirtInTheWild1.jpg" />
				</MetaTags>

	  			<div style={styles.spacer} />

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">

					<Paper  style={{padding:15}} zDepth={3}>
						<Row>
							<Col xs={12} >
								<h2>Help support Mason DREAMers directly and/or help fund scholarships for our community! There are many ways we welcome your financial contributions:
								</h2>

							</Col>
						</Row>
						<Row>
							<Col xs={12} sm={7}>
								<ol>
									<li>
										<a href="https://securemason.gmu.edu/s/1564/match/index-1col.aspx?sid=1564&gid=2&pgid=651&cid=1709&appealcode=IFFC0"> <b>DONATE to our Dream Scholarship</b></a>.
										When choosing the designation for your donation,
										choose other and type "Mason Dream Scholarship" in the space provided for other.
										Your gift will help support scholarships for undocumented students at Mason.
									</li>
									<li>
										<b>DONATE to our organization.</b> Donations can be written to George Mason University and on
										the memo state "Mason DREAMers." This money will go directly to our student organization
										and help us continue to carry out our advocacy initiatives which include (but are not limited to)
										outreach to local high schools and community centers, events and trainings open to the general public throughout the semester.
									</li>
									<li>
										<b>PURCHASE our OFFICIAL Mason DREAMers T-shirt.</b> Show off your support to our organization and
										community by buying our brand new 2017 t-shirt for only $12! Email us at
										<a href="gmumasondreamers@gmail.com"> gmumasondreamers@gmail.com </a>
										subject line "Purchase T-shirt" to reserve one while supplies last.
									</li>
									<li>
										<b>JOIN US at our NEXT FUNDRAISER.</b> Be on the lookout for our next fundraiser,
										throughout the semester we will be partnering up with various local restaurants
										in an effort to accrue more funds for our scholarships. So come hungry and bring friends!
									</li>
								</ol>

							</Col>

							<Col xs={12}  sm={5}>

								<Image src="../images/dreamersShirtGif.gif" style={{width:"100%"}}/>

							</Col>
						</Row>
					</Paper>
				</Grid>
			</div>
		);
	}
}


export default SupportUsPage;

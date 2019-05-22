import React, { Component } from 'react';

import Dimensions from 'react-dimensions';
import MetaTags from 'react-meta-tags';

import { Grid, Col, Row } from 'react-bootstrap';

import YouTube from 'react-youtube';

import MainNavBar from '../components/MainNavBar';
import AboutUsGallery from '../containers/AboutUsGallery';

import Paper from '@material-ui/core/Paper';

import {
	Spacer
} from 'kokolib';

class AboutUsPage extends Component {

	getStyles() {
		const styles = {

			mantra: {
				backgroundColor: 'rgb(254, 190, 16)',
				width: '100%',
				fontSize: 'x-large',
				fontWeight: 'bold',
				textAlign: 'center',
				paddingTop: 20,
				paddingBottom: 20,
			},
			tileLinkContainer: {
				width: '100%',
				paddingTop: 20,
				paddingBottom: 20,
			},
			spacer: {
				marginTop: 30,
			},
		};
		return styles;
	}


	render() {

		const styles = this.getStyles();

		return (
      		<div>
	  			<MainNavBar backgroundImage="/images/121517/DSC08853.jpg" pageTitle={"Who We Are"} />

				<MetaTags>
					<title>Mason DREAMers | About</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="About Mason DREAMers" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="About" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/121517/DSC08853.jpg" />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Paper  style={{padding:15}} zDepth={3}>
						<Row>
							<Col xs={12} sm={6}>
								<h1>UNAFRAID,<br />UNASHAMED,<br />UNDOCUMENTED</h1>
								<div>
									"Since our establishment in the fall of 2011, Mason DREAMers has grown to be one of
									the most active and influential student organizations at George Mason University.
									We educate, inspire, and take action to break barriers created by the current broken
									immigration system in the United States.
								</div>
								<br />
								<div>
									In the past five years, we have created educational initiatives,
									events and resources to advocate for undocumented students within
									and outside of George Mason University. These have included:​
									<ul>
										<li>Student Panels</li>
										<li>High school outreach initiatives</li>
										<li>Immigration Monologues</li>
										<li>DREAM weeks</li>
										<li>UndocuAlly trainigs</li>
									</ul>
								</div>
								<br />
								<div>
									All have been open to the general public and our largest event to date
									has had over 150 attendees. We have also worked tirelessly to generate additional
									funds for the Mason Dream Scholarship and have paved the way for the Stay Mason
									Student Support Fund
								</div>
								<br />
								<div>
									Ultimately, we do not seek to only benefit one segment of the student population, but create a fair ground for all.
								</div>
								<br />
								<div>
									We are proud supporters of similar student organizations at: Virginia Tech, Virginia Commonwealth University,
									Northern Virginia Community College, the University of Virginia, and Georgetown. We are grateful that they
									have adopted Mason DREAMers as a model organization to follow.”
								</div>
								<div style={{marginBottom: 20}} />
							</Col>

							<Col xs={12} sm={6}>
								<Row>
									<Col xs={12} style={styles.spacer} />
								</Row>
								<Row>
									<AboutUsGallery  />
								</Row>

							</Col>

						</Row>
					</Paper>
				</Grid>


				<Spacer space={30} />

	  			<div style={styles.mantra} >
	  				<YouTube  videoId="CUgOcOPN0aU"
	  					opts={{
	  						height:(this.props.containerWidth < 768 ? 185 : 390),
	  						width:(this.props.containerWidth < 768 ? 320 : 640)
	  					}}
	  				/>

	  				<div style={{padding:20, color:"#000"}}>
	  					To create a more inclusive environment for undocumented students through education and advocacy
	  				</div>
	  			</div>

      		</div>
		);
	}
}

export default Dimensions()(AboutUsPage);

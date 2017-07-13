import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Dimensions from 'react-dimensions';

import AppThemeMason from './themes/AppThemeMason';

import { Grid, Col, Row } from 'react-bootstrap';

import YouTube from 'react-youtube';

import MainNavBar from './components/MainNavBar';
import MainFooter from './components/MainFooter';


import GridGallery from './components/GridGallery';


class Master extends Component {

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
			spacer: {
				marginTop: 30,
			},
		};
		return styles;
	}


	render() {

		const styles = this.getStyles();

		return (
			<MuiThemeProvider muiTheme={getMuiTheme(AppThemeMason)}>
				<div>

		  			<MainNavBar backgroundImage="/images/headerBackground.jpg" pageTitle={<div>UNAFRAID,<br />UNASHAMED,<br />UNDOCUMENTED</div>} />

					<Grid className="mainPageContentGrid">
						<Row>
							<Col xs={12} sm={6}>
								<h1>Who We Are</h1>
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

									<GridGallery data={ {picRows: [
										{pics: [
											{source: "/images/aboutUs/3-first-im-2012_orig.jpg", index:0},
											{source: "/images/aboutUs/04-02-17f-2_orig.jpg", index:1 },
										]},
										{pics: [
											{source: "/images/aboutUs/11-2014-2015-exec-board_1_orig.jpg", index:2 },
											{source: "/images/aboutUs/15_orig.jpg", index:3 },
										]},
										{pics: [
											{source: "/images/aboutUs/16_1_orig.jpg", index:4},
											{source: "/images/aboutUs/2013-06-12-15-55-01_orig.jpg", index:5}
										]}
									]}} opts={{
										xs:6,
										sm:6,
										md:6,
										lg:6
									}} />

								</Row>

							</Col>

						</Row>
					</Grid>


		  			<div style={styles.mantra} >
		  				<YouTube  videoId="CUgOcOPN0aU" 
		  					opts={{
		  						height:(this.props.containerWidth < 768 ? 185 : 390), 
		  						width:(this.props.containerWidth < 768 ? 320 : 640)
		  					}}
		  				/>

		  				<div style={{padding:20}}>
		  					To create a more inclusive environment for undocumented students through education and advocacy
		  				</div>
		  			</div>

		  			<MainFooter />

				</div>
			</MuiThemeProvider>
		);
	} 
}

export default Dimensions()(Master);

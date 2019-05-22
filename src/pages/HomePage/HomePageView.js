import React, { Component } from 'react';

import Dimensions from 'react-dimensions';

import { Grid, Col, Row } from 'react-bootstrap';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import MetaTags from 'react-meta-tags';

import MainNavBar from '../../components/MainNavBar';
import DreamBlog from '../../components/DreamBlog';
import LobbyFormHomeLink from '../../components/LobbyFormHomeLink';

import styles from "./styles";
import HomeInstaFeed from "./Components/HomeInstaFeed";

import {
	Spacer,
	TwitterTimeline,
	NewsLetterSignupForm,
	FacebookLiveStream,
	EventListView,
	Countdown
} from 'kokolib';

class HomePageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mounted: false
    }
  }

	componentDidMount() {
    this.setState({mounted: true});
	}

	render() {

		const { classes } = this.props;

		return (
  		<div>

  			<MainNavBar backgroundImage="/images/bench2018.jpg" pageTitle="Home" />


				<MetaTags>
					<title>Mason DREAMers | Home</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Mason DREAMers Home Page" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Home" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/logoWhite.png" />
				</MetaTags>

  			<div className={classes.tileLinkContainer}>
				</div>

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12} md={8} lg={8}>

							<FacebookLiveStream />

								<div className="ghostEventList">
									<Paper  style={{padding:15}} elevation={3}>
										<h1>Next Event</h1>
										<EventListView pastEvents={false}
											maxResults={1}
											nextEvents={true}
											targetPageRoot="/events" />
									</Paper>
									<Spacer space={30} />
								</div>

							<DreamBlog maxResults={4} match={this.props.match} targetPageRoot="/news"/>
						</Col>
						<Col xs={12} md={4} lg={4} >

							<div className={classes.outreachButtonContainer}>
								<Button variant="contained" size="large" color="primary" target="_blank" className={classes.outreachButton} href="https://goo.gl/forms/QMIs6ZzaphJ50Iu13" >
									Request an Outreach
								</Button>
							</div>

        			<TwitterTimeline user="MasonDREAMers" chrome="noborders noheader nofooter transparent" limit={5}/>

							<Spacer space={30} />

							{this.state.mounted &&
								<HomeInstaFeed />
							}

							<Spacer space={30} />
							<Row>
								<Col xs={12} sm={6} md={12}>
									<LobbyFormHomeLink />
								</Col>
								<Col xs={12} sm={6} md={12}>
									<NewsLetterSignupForm />
								</Col>
							</Row>
							<Spacer space={30} />
						</Col>
					</Row>
				</Grid>
  		</div>
		);
	}
}

export default withStyles(styles)(HomePageView);

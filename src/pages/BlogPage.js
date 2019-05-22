import React from 'react';

import MainNavBar from '../components/MainNavBar';

import Paper from '@material-ui/core/Paper';

import MetaTags from 'react-meta-tags';

import {Grid, Col, Row } from 'react-bootstrap';

import {
	Spacer,
	BlogArchiveContainer,
	BlogPostContainer
} from 'kokolib';

class BlogPage extends React.Component
{


	render() {

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/bench.small.jpg" pageTitle="News" />



				<div id="top" />
	  			<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12} lgHidden={true}>
							<Paper  style={{padding:15}} zDepth={3}>
								<h1>History</h1>
								<BlogArchiveContainer location={this.props.location} targetPageRoot="/news" activePostId={this.props.match.params.postId} />
								<Spacer space={30} />
							</Paper>
						</Col>
						<Col xs={12} lg={8}>


							<MetaTags>
								<title>Mason DREAMers | News</title>
								<meta id="ogDescription" name="ogDescription" property="og:description" content="Articles and News" />
								<meta id="ogTitle" name="ogTitle" property="og:title" content="News" />
								<meta id="ogImage" name="ogImage" property="og:image" content="http://masondreamers.org/images/logoWhite.png" />
							</MetaTags>

							<BlogPostContainer />

							<Spacer space={15} />
							<div style={{textAlign: "center"}}>
								<a href="#top">Back to top</a>
							</div>
							<Spacer space={15} />
						</Col>
						<Col xsHidden={true} smHidden={true} mdHidden={true} lg={4} >
							<div>
								<Paper  style={{padding:15}} zDepth={3}>
									<h1>History</h1>
									<BlogArchiveContainer  location={this.props.location} targetPageRoot="/news" activePostId={this.props.match.params.postId} />
								</Paper>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}


export default BlogPage;

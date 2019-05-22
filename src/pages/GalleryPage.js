import React from 'react';

import MainNavBar from '../components/MainNavBar';

import MetaTags from 'react-meta-tags';
import { Grid, Col, Row } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

import {
	Spacer,
	DataContainer,
	GalleryCollection
} from 'kokolib';

class GalleryPage extends React.Component
{


	render() {

		let that = this;
		return(
			<div>

	  			<MainNavBar backgroundImage="/images/121517/DSC08856.jpg" pageTitle="Gallery" />


				<MetaTags>
					<title>Mason DREAMers | Gallery</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Gallery of Pictures" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Gallery" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/121517/DSC08856.jpg"  />
				</MetaTags>

				<Spacer space={30} />

				<Grid className="mainPageContentGrid">
					<Paper  style={{padding:15}} elevation={3}>
						<Row>
							<Col xs={12}>
								<DataContainer action="api/v1/GetGalleryAlbums"
									resultRender={function(data) {
										return (<GalleryCollection data={data} match={that.props.match} />);
								}}>
								</DataContainer>
							</Col>
						</Row>
					</Paper>
				</Grid>
			</div>
		);
	}
}


export default GalleryPage;

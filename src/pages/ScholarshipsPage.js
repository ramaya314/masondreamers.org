import React from 'react';
import MetaTags from 'react-meta-tags';
import { Grid, Col, Row } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import MainNavBar from '../components/MainNavBar';

import StickySectionNavigation from '../components/StickySectionNavigation';

import {
	Spacer,
	DataContainer,
} from 'kokolib';

const ScholarshipThumb = (scholarship) => {
	return (
		<Col xs={12} sm={6}>
			<div className="scholarshipOuterContainer">
				<div className="scholarshipInnerContainer">
					<div className="scholarshipTitle">
						<a href={scholarship.Url} target="_blank">
							{scholarship.Title}
						</a>
					</div>

					<div className="scholarshipAmount">
						Amount: <b>{scholarship.Amount}</b>
					</div>

					<div className="scholarshipDeadline">
						Deadline: <b>{scholarship.Deadline}</b>
					</div>
					<br />
					<div className="scholarshipDescription"  dangerouslySetInnerHTML={{__html: scholarship.Description}} >
					</div>

					<center>
		      <Button variant="outlined" className="scholarshipViewButton" onClick={() => {window.open(scholarship.Url, "_blank")}}>
		        Apply
		      </Button>
				</center>

				</div>
			</div>
		</Col>
	);
};

class ScholarshipsPage extends React.Component
{

	render() {

		return(
			<div>

	  		<MainNavBar backgroundImage="/images/resourcesHeader.jpg" pageTitle="Scholarships" />

				<MetaTags>
					<title>Mason DREAMers | Scholarships for Undocumented Students</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Scholarships available for undocumented students and faculty." />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Resources" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/resourcesHeader.jpg" />
				</MetaTags>

				<Spacer space={30} />


				<Grid className="mainPageContentGrid">
					<Paper  style={{padding:15}} elevation={3}>
								<DataContainer action="api/v1/GetScholarships"
									resultRender={function(data) {


										console.log(data);

										var rows = [];
										for(var i = 0; i < data.length; i += 2) {
											var scholarship = data[i];
											var nextScholarship = i + 1 >= data.length ? null : data[i + 1];

											rows.push(
													<Row>
														{ScholarshipThumb(scholarship)}
														{nextScholarship && ScholarshipThumb(nextScholarship)}
													</Row>
											);
										}

										return <div>{rows}</div>;
								}}>
								</DataContainer>
					</Paper>
				</Grid>
			</div>
		);
	}
}


export default ScholarshipsPage;

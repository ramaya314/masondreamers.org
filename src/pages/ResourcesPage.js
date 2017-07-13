import React from 'react';

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';

import Spacer from "../components/Spacer";


import StickySectionNavigation from '../components/StickySectionNavigation';

import { Grid, Col, Row, Nav, NavItem } from 'react-bootstrap';

import { StickyContainer, Sticky } from 'react-sticky';

import Waypoint from 'react-waypoint';


import StudentScolarships from '../components/ResourcePageComponents/StudentScolarships';
import FacultyAndStaff from '../components/ResourcePageComponents/FacultyAndStaff';
import MeetOurStudentSupportCoordinator from '../components/ResourcePageComponents/MeetOurStudentSupportCoordinator';
import AppealingForInstateTuition from '../components/ResourcePageComponents/AppealingForInstateTuition';
import MasonAndVAResources from '../components/ResourcePageComponents/MasonAndVAResources';


class ResourcesPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true,
		}
	}   


	getStyles() {
		const styles = {
		};
		return styles;
	}

	componentWillMount() {
		console.log(this.props);
	}


	getData() {
		const data = [
			{
				"id" : "studentScolarships",
				"title": "Student Scolarships",
				"component" : <StudentScolarships />,
			},
			{
				"id" : "appealingForTuition",
				"title": "Appealing for In-State Tuition",
				"component" : <AppealingForInstateTuition />,
			},
			{
				"id" : "otherResources",
				"title": "Other Mason and Virginia Resources",
				"component" : <MasonAndVAResources />,
			},
			{
				"id" : "facultyAndStaff",
				"title": "Faculty and Staff",
				"component" : <FacultyAndStaff />,
			},
			{
				"id" : "studentSupportCoordinator",
				"title": "Meet Our Student Support Coordinator",
				"component" : <MeetOurStudentSupportCoordinator />,
			},
		];

		return data;
	}


	render() {

		const styles = this.getStyles();

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/resourcesHeader.jpg" pageTitle="Resources" />

				<Spacer space={30} />


	  			<StickySectionNavigation data={this.getData()} topOffset={50} />

				<Spacer space={30} />

		  		<MainFooter />
			</div>
		);
	}
}


export default ResourcesPage;
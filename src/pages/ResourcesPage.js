import React from 'react';
import MetaTags from 'react-meta-tags';

import MainNavBar from '../components/MainNavBar';

import StickySectionNavigation from '../components/StickySectionNavigation';
import StudentScolarships from '../components/ResourcePageComponents/StudentScolarships';
import FacultyAndStaff from '../components/ResourcePageComponents/FacultyAndStaff';
import MeetOurStudentSupportCoordinator from '../components/ResourcePageComponents/MeetOurStudentSupportCoordinator';
import AppealingForInstateTuition from '../components/ResourcePageComponents/AppealingForInstateTuition';
import MasonAndVAResources from '../components/ResourcePageComponents/MasonAndVAResources';

import {
	Spacer
} from 'kokolib';

class ResourcesPage extends React.Component
{
	getData() {
		const data = [
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

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/resourcesHeader.jpg" pageTitle="Resources" />

				<MetaTags>
					<title>Mason DREAMers | Resources</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="Scholarships and resources available for undocumented students and faculty." />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Resources" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/resourcesHeader.jpg" />
				</MetaTags>

				<Spacer space={30} />

	  			<StickySectionNavigation data={this.getData()} topOffset={50} />
			</div>
		);
	}
}


export default ResourcesPage;

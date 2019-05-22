import React from 'react';

import MetaTags from 'react-meta-tags';
import MainNavBar from '../components/MainNavBar';

import StickySectionNavigation from '../components/StickySectionNavigation';
import AboutUndocuAlly from '../components/BecomeAnAllyPageComponents/AboutUndocuAlly';
//import RsvpUndocuAlly from '../components/BecomeAnAllyPageComponents/RsvpUndocuAlly';
import AllyDirectory from '../components/BecomeAnAllyPageComponents/AllyDirectory';

import {
	Spacer
} from 'kokolib';

class BecomeAnAllyPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true,
		}
	}   

	getData() {
		const data = [
			{
				"id" : "aboutUndocuAlly",
				"title": "About UndocuAlly",
				"component" : <AboutUndocuAlly />,
			},
			/*
			{
				"id" : "rsvp",
				"title": "RSVP For A Session",
				"component" : <RsvpUndocuAlly />,
			},
			*/
			{
				"id" : "allyDirectory",
				"title": "Ally Directory",
				"component" : <AllyDirectory />,
			},
		];

		return data;
	}


	render() {
		return(
			<div>

	  			<MainNavBar backgroundImage="/images/031017UndocuAlly.jpg" pageTitle="Become An Ally" />

				<MetaTags>
					<title>Mason DREAMers | Become An Ally</title>
					<meta id="ogDescription" name="ogDescription" property="og:description" content="About Mason DREAMErs' UndocuAlly Program" />
					<meta id="ogTitle" name="ogTitle" property="og:title" content="Become An Ally" />
					<meta id="ogImage" name="ogImage" property="og:image" content="http://www.masondreamers.org/images/031017UndocuAlly.jpg" />
				</MetaTags>

				<Spacer space={30} />

	  			<StickySectionNavigation data={this.getData()} topOffset={50} />
			</div>
		);
	}
}


export default BecomeAnAllyPage;
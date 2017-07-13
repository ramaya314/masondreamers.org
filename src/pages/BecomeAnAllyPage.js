import React from 'react';

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';

import Spacer from "../components/Spacer";


import StickySectionNavigation from '../components/StickySectionNavigation';

import { Grid, Col, Row, Nav, NavItem } from 'react-bootstrap';

import { StickyContainer, Sticky } from 'react-sticky';

import Waypoint from 'react-waypoint';


import AboutUndocuAlly from '../components/BecomeAnAllyPageComponents/AboutUndocuAlly';
import RsvpUndocuAlly from '../components/BecomeAnAllyPageComponents/RsvpUndocuAlly';
import AllyDirectory from '../components/BecomeAnAllyPageComponents/AllyDirectory';


class BecomeAnAllyPage extends React.Component
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
				"id" : "aboutUndocuAlly",
				"title": "About UndocuAlly",
				"component" : <AboutUndocuAlly />,
			},
			{
				"id" : "rsvp",
				"title": "RSVP For A Session",
				"component" : <RsvpUndocuAlly />,
			},
			{
				"id" : "allyDirectory",
				"title": "Ally Directory",
				"component" : <AllyDirectory />,
			},
		];

		return data;
	}


	render() {

		const styles = this.getStyles();

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/031017UndocuAlly.jpg" pageTitle="Become An Ally" />

				<Spacer space={30} />


	  			<StickySectionNavigation data={this.getData()} topOffset={50} />

				<Spacer space={30} />

		  		<MainFooter />
			</div>
		);
	}
}


export default BecomeAnAllyPage;
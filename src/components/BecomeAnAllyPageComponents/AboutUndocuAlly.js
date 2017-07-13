import React from 'react';

import {Col, Row, Image} from 'react-bootstrap';

import Spacer from "../Spacer";

import GridGallery from "../GridGallery"


class AboutUndocuAlly extends React.Component
{

	render() {

		return(
			<div>
				<Row>
					<Col xs={12} sm={8}>
						<Spacer space={10} />
						<p>
							Modeled after the UndocuAlly trainings conducted at UC Berkeley, 
							Mason DREAMers introduced its first UndocuAlly training in the Spring semester of 2014. 
							This training is designed to educate  faculty, students, and staff at Mason on the history, 
							legislation, and the current realities of the undocumented community. Our goal is to cultivate 
							a more supportive environment for undocumented students through education. Upon completing the 
							training, "UndocuAllies" serve as knowledgeable campus resources for undocumented students seeking 
							support. The trainings are typically four hours long, composed of several interactive and informative activities. 
							Participants will leave training with an understanding of:
						 </p>

						 <ul>
						 	<li>The current immigration movement and legislation that affects undocumented students</li>
						 	<li>The connotations and misconceptions that are attached to undocumented students</li>
						 	<li>Statistics on the undocumented student body population at Mason and nationwide</li>
						 	<li>The resources available on campus and in the community for undocumented students</li>
						 	<li>Their roles and responsibilities as allies</li>
						 </ul>

					</Col>
					
					<Col xs={12} sm={4}>

	  					<Spacer space={30} />

						<GridGallery data={ {picRows: [
							{pics: [
								{source: "/images/aboutUndocu1.jpg", index:0},
								{source: "/images/aboutUndocu2.png", index:1 },
								{source: "/images/102116UndocuAlly.jpg", index:2 },
							]}
						]}} opts={{
							xs:12,
						}} />

					</Col>
				</Row>


			</div>
		);
	}
}


export default AboutUndocuAlly;
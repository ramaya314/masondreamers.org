import React from 'react';

import {Col, Row, Image} from 'react-bootstrap';

import Spacer from "../Spacer";

class StudentScolarships extends React.Component
{


	getStyles() {

		const styles = {
			listItemStyle: {
				lineHeight: '30px',
			}
		};
		return styles;
	}


	render() {

		const styles = this.getStyles();

		return(
			<div>
				<Row>
					<Col xs={12} sm={4}>
	  					<Spacer space={30} />
						<Image src="../images/ler-wgm-4_2_orig.png" style={{width:"100%"}}/>
					</Col>
					<Col xs={12} sm={8}>
	  					<Spacer space={30} />
						<h2>
							Scholarships for High School Seniors who are minorities
						</h2>

						<ol>
							<li style={styles.listItemStyle} ><a target="_new" href="https://scholarships.gmsp.org/Program/Details/7123dfc6-da55-44b7-a900-0c08ba1ac35c"> Gates Millenium Scholars </a> <b>(Deadline 01/13/16​)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.hitched.co.uk/wedding-scholarship/"> The Hitched Wedding Scholarship </a> <b> (Deadline 11/30/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="https://rmhc-nola.org/2015-2016-scholarship-info/"> McDonalds Scholarship  </a> <b>(Deadline 01/20/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.jackierobinson.org/apply/applicants/"> Jackie Robinson Foundation </a> <b>(Deadline 02/15/17)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.ca-core.org/yahoo_site_admin/assets/docs/CORE_QLC_Y8_Application.35173627.pdf"> Chicano Organizing & Research in Education (CORE) </a> <b>(Deadline 02/27/16 For undocumented high school students)</b></li>
						</ol>

	  					<Spacer space={30} />

						<h2>
							Scholarships for Undocumented Students
						</h2>

						<ol>
							<li style={styles.listItemStyle} ><a target="_new" href="http://www.hitched.co.uk/wedding-scholarship/"> The Hitched Wedding Scholarship </a> <b>(Deadline 11/30/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.beadonor.org/news-a-events/scholarship-information"> Beadonor Scholarship </a> <b>(Deadline 03/31/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.dreamproject-va.org/dream-scholarship/how-to-apply/"> Dream Project Scholarship </a> <b>(Deadline 03/01/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://hsf.net/en/scholarships/"> Hispanic Scholarship Fund </a> <b>(Deadline 03/30/17)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.cbcfinc.org/scholarships/"> Congressional Black Caucus Foundation </a> <b>(Deadline 02/28/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.apiasf.org/scholarship_apiasf.html"> Asian & Pacific-Islander American Scholarship Fund </a> <b>(Deadline 01/11/117)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.thecollegecompanion.com/scott-and-stringfellow-educational-foundation-scholarship/"> BB&T Scott & Stringfellow Scholarship </a> <b>(Deadline 01/29/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://sbeavergtchs.weebly.com/scholarship-information/category/dennys-scholarships"> Denny’s Scholarship  </a> <b>(Deadline 03/25/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.jimmyranefoundation.org/scholarships"> Jimmy Rane Foundation </a> <b>(Deadline 02/07/17)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://vapeo.org/VSSFApplication2016-17.pdf"> Virginia PEO Sisterhood</a> <b>(Deadline 02/15/16)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://asianpacificfund.org/wp-content/uploads/2015/12/SCH-FLYER-2016.pdf"> Asian Pacific Fund </a> <b>(Deadline 02/19/16 must be a permanent resident or citizen unless otherwise)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="https://www.shawncartersf.com/scholarship-fund/#app"> Shawn Carter Foundation </a> <b>(Deadline 04/30/16 only open for 1 month)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.collegefund.org/students_and_alumni/content/scholarships"> American Indian College Fund </a> <b>(Deadline 04/30/16 US citizenship required line on webpage)</b></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://sdxdc.org/SDXDCScholarship.html"> Sigma Delta Chi Foundation of Washington D.C. </a> <b>(Deadline 02/23/16)</b></li>
						</ol>

	  					<Spacer space={30} />

						<h2>
							Scholarships for Undocumented Students
						</h2>

						<ol>
							<li style={styles.listItemStyle} ><a target="_new" href="http://www.masondreamers.org/uploads/3/7/5/7/37574171/local_scholarships_available_for_undocumented_students.pdf"> Local Scholarships for Undocumented Student </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.hitched.co.uk/wedding-scholarship/"> The Hitched Wedding Scholarship </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://unitedwedream.org/blog/2015-scholarship-opportunities-dreamers/?source=FB5Feb2015"> United We Dream: 2015 Scholarship Opportunities for DREAMers </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://issuu.com/daytorre/docs/dream_scholarship_database"> Dream Project Scholarship Database </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://e4fc.org/images/E4FC_Scholarships.pdf"> Educators for Fair Consideration: Scholarship List 2013-2014 </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.maldef.org/assets/pdf/1415_MALDEF_Scholarship.pdf"> MALDEF Scholarship Resource Guide </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href="http://www.goodcall.com/scholarships/hispanic/"> GoodCall Scholarship Search Engine- Hispanic Scholarships </a></li>

							<li style={styles.listItemStyle} ><a target="_new" href=""> E4FC's 2016 Undergraduate "How to Find Scholarships" Guide </a></li>

							<li style={styles.listItemStyle} > 
								Download a PowerPoint Presentation with tips for an effective scholarship interview
								<a target="_new" href="http://www.masondreamers.org/uploads/3/7/5/7/37574171/interview_presentation.pptx"> Here </a>
							</li>
						</ol>

					</Col>
				</Row>

			</div>
		);
	}
}


export default StudentScolarships;
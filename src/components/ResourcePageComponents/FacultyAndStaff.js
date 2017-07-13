import React from 'react';

import {Col, Row, Image} from 'react-bootstrap';

import Spacer from "../Spacer";


class FacultyAndStaff extends React.Component
{


	getStyles() {
		
		const styles = {
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
						<Image src="../images/mkinu_3_orig.png" style={{width:"100%"}}/>
					</Col>
					<Col xs={12} sm={8}>
	  					<Spacer space={30} />
						<h2>
							UndocuAlly Training Program
						</h2>
						<p>
							Modeled after the UndocuAlly trainings conducted at UC Berkeley , 
							Mason DREAMers introduced its first UndocuAlly training in the Spring semester of 2014. 
							This training is designed to educate faculty, students, and staff at Mason on the history, 
							legislation, and the current realities of the undocumented community. Our goal is to 
							cultivate a more supportive environment for undocumented students through education. 
							Upon completing the training, "UndocuAllies" serve as knowledgeable campus resources 
							for undocumented students seeking support. The trainings are typically six hours long, 
							composed of several interactive and informative activities. 
						</p>
						<p>
							For more information click 
							<a target="_new" href="http://www.masondreamers.org/become-an-ally.html" > here </a>
						</p>

	  					<Spacer space={30} />
						<h2>
							Undocumented Americans
						</h2>
						<p>
							This page by the American Psychological Association provides information about 
							undocumented youth in America. Their video, "Undocumented Americans" portrays 
							three undocumented youth who arrived as young children — Jong-Min, Pedro and Silvia. 
							They share their stories of how they are fighting hard to achieve their piece of 
							the American dream.
						</p>
						<p>
							For more information click 
							<a target="_new" href="http://www.apa.org/topics/immigration/undocumented-video.aspx" > here </a>
						</p>

	  					<Spacer space={30} />
						<h2>
							UndocuScholars Report 2015
						</h2>
						<p>
							This report seeks to provide a comprehensive perspective of 
							the experiences and outcomes of undocumented undergraduates in 
							higher education, including the demography of this student population, 
							an understanding of where and why they enroll in college, and how they 
							present unique challenges for individual campuses, states, and our national 
							higher education priorities generally. ﻿﻿﻿﻿
						</p>
						<p>
							For more information click 
							<a target="_new" href="http://www.undocuscholars.org/assets/undocuscholarsreport2015.pdf" > here </a>
						</p>


	  					<Spacer space={30} />
						<h2>UndocuScholars Report 2015</h2>
						<p>
							This  document contains a brief history of DACA (Deferred Action for Childhood Arrivals), 
							an overview of the eligibility requirements, and how educators can support undocumented students in obtaining DACA.
						</p>
						<p>
							For more information click 
							<a target="_new" href="http://e4fc.org/images/E4FC_DACAEducatorToolkit.pdf" > here </a>
						</p>

	  					<Spacer space={30} />
						<h2>Prezis</h2>
						<p>
							To learn more about the immigration movement, national trends, and undocumented students at Mason, please visit our <a target="_new" href="http://prezi.com/user/djbrgy1vcl0z/" > Prezi</a> page.﻿﻿﻿﻿
						</p>


	  					<Spacer space={30} />
						<h2>Financial Aid Estimator</h2>
						<p>
							Click <a href="http://www.jkcf.org/scholarship-programs/undergraduate-transfer/financial-need-estimator/">here</a> to go to the financial aid estimator:
						</p>
					</Col>
				</Row>


			</div>
		);
	}
}


export default FacultyAndStaff;
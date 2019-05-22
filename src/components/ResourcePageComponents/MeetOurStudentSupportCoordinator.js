
import React from 'react';

import {Col, Row, Image} from 'react-bootstrap';

import {
	Spacer
} from 'kokolib';

class MeetOurStudentSupportCoordinator extends React.Component
{
	render() {
		return(
			<div>

				<Row>
					<Col xs={12} sm={5}>
	  					<Spacer space={30} />
						<Image src="../images/paula-a_orig.png" style={{width:"100%"}}/>
					</Col>

					<Col xs={12} sm={7}>

	  					<Spacer space={30} />
						<p>
							Paula Alderete is George Mason University's Student Support Coordinator at <a href="http://odime.gmu.edu/">ODIME</a>. 
							Paula is more than happy to help students with any questions they may have about 
							paying college tuition or getting support from the community.
						</p>
						<p>
							Please contact Paula A. through e-mail at <a href="mailto:odime@gmu.edu">odime@gmu.edu</a>
							 as well as <a href="mailto:paldert@gmu.edu">paldert@gmu.edu</a> with the text <b>“Attn: Paula A.”</b> in the subject line.
						</p>
					</Col>
				</Row>

				{/*}
				<hr />

				<Row>
					<Col xs={12} sm={5}>
	  					<Spacer space={30} />
						<Image src="../images/paula-az_orig.png" style={{width:"100%"}}/>
					</Col>

					<Col xs={12} sm={7}>

	  					<Spacer space={30} />
						<p>
							Intern, Global Politics Fellows Program: Paula Alvarez Zuluaga. 
						</p>
						<p>
							Please contact Paula A.Z. through e-mail at <a href="mailto:odime@gmu.edu">odime@gmu.edu</a>
							 as well as <a href="mailto:palvare@gmu.edu">palvare4@gmu.edu</a> with the text <b>“Attn: Paula A.”</b> in the subject line.
						</p>
					</Col>
				</Row>
				*/}
				
			</div>
		);
	}
}


export default MeetOurStudentSupportCoordinator;
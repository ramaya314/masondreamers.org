import React from 'react';

import {
	Spacer
} from 'kokolib';


class AppealingForInstateTuition extends React.Component
{
	render() {
		return(
			<div style={{padding:15}}>
				<Spacer space={10} />
				<p>
					On April 29, 2014, Virginia Attorney General Mark R. Herring announced that students who have received Deferred Action for Childhood Arrivals (DACA)
					qualify for in-state tuition. To demonstrate their eligibility for in-state tuition, DACA students must:
				 </p>

				 <ul>
				 	<li>Must be in an approved DACA status for at least one year;</li>
				 	<li>Must be acce﻿﻿pted by a Virginia college or university;</li>
				 	<li>Must not have had an educational reason for moving to Virginia; and</li>
				 	<li>Must have a present, fixed and indefinite domicile in Virginia in accord with the statutory factors for in-state tuition.</li>
				 </ul>

				<p>
					For more information on the appeals process, click on the following link: <a target="_new" href="http://registrar.gmu.edu/students/domicile/">http://registrar.gmu.edu/students/domicile/</a>
					For general legal information regarding In-State tuition requirements for DACA students, click here to view a presentation conducted by Simon Sandoval-Moshenberg, attorney with the Legal Aid Justice Center’s Immigrant Advocacy Program.
				</p>
			</div>
		);
	}
}


export default AppealingForInstateTuition;
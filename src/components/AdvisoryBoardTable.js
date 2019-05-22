import React from 'react';
//import '../css/react-bootstrap-table.min.css';
import AdvisoryBoardEntry from './AdvisoryBoardEntry';

import {
	DataContainer,
	Utils
} from 'kokolib';

class AdvisoryBoardTable extends React.Component
{

	render() {

		return(
			<DataContainer action="api/v1/GetAdvisoryBoardDirectory" resultRender={function(data) {

				data = Utils.prepareGSArrayForTable(data);

				//aplhabetical sort
				data.sort(function(a, b) {
					var textA = a.Name.toUpperCase();
					var textB = b.Name.toUpperCase();
					return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				});

				return(
					data.map(function(row, i) {
						return (
							<AdvisoryBoardEntry key={i} place={i + 1} name={row.Name} email={row.Email} />
						);
					})
				)
			}}>
			</DataContainer>
		);
	}
}


export default AdvisoryBoardTable;
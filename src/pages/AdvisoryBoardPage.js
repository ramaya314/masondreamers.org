import React from 'react';

import AdvisoryBoardTable from '../components/AdvisoryBoardTable';

import MainNavBar from '../components/MainNavBar';
import MainFooter from '../components/MainFooter';

import { Grid, Col, Row } from 'react-bootstrap';

class AdvisoryBoardPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			isLoading : true,
		}
	}   


	getStyles() {
		const styles = {
			spacer: {
				marginTop: 30,
			},
		};
		return styles;
	}

	componentWillMount() {
	}

	render() {

		const styles = this.getStyles();

		return(
			<div>

	  			<MainNavBar backgroundImage="/images/headerBackground.jpg" pageTitle="Advisory Board" />

	  			<div style={styles.spacer} />

				<Grid className="mainPageContentGrid">
					<Row>
						<Col xs={12} >
								<AdvisoryBoardTable />
						</Col>
					</Row>
				</Grid>

	  			<div style={styles.spacer} />

		  		<MainFooter />
			</div>
		);
	}
}


export default AdvisoryBoardPage;
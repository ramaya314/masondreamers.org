import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';


import {
	Spacer
} from 'kokolib';


class LobbyFormHomeLink extends Component {

	getStyles() {
		const styles = {
			paperStyle : {
				margin: 0,
				padding: 0,
				background: 'rgba(0,0,0,0.8)',
			},
			thumb : {
				padding: 0,
				border: 0
			},
			content: {
				padding:25,
				fontSize: 23,
				color:'#fff',
				textShadow: '3px 3px #000',
				textAlign: 'left',
				verticalAlign: 'middle',
				width: '50%',
				height:'100%',
			},
			container: {
				backgroundImage: 'url("/images/panelLong.small.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: 200,
				display:'grid',
			}


		}
		return styles;
	}


	render() {

    	const styles = this.getStyles();

		return(
			<Paper  style={styles.paperStyle} zDepth={3} >
					<div style={styles.container}  className="tileLink">
						<div style={styles.content} >
							<div>
								Join Mason DREAMers Rapid Response Team
							</div>
							<Spacer space={30} />
							<Button  bsStyle="primary" bsSize="large" block onClick={() => {
								window.location.href= "/joinrapidresponseteam";
							}}>Join</Button>
						</div>
					</div>
			</Paper>
		);
	}
}

export default LobbyFormHomeLink

import React from 'react';

import Paper from '@material-ui/core/Paper';


class TileLink extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading : true,
		}

	}

	getStyles() {
		const styles = {
			container : {
				background: this.props.background ? 'transparent' : 'rgb(0, 105, 64)',
				height: 100,
				width: '100%',
				color: '#eff0e7',
				fontSize: '26px',
				fontWeight: '600',
				marginBottom: 10,
			    verticalAlign: 'bottom',
			    padding: '8px 22% 9px 15px',
			    display: 'table',
			    textDecoration: 'none',
			    backgroundImage: 'url(' + this.props.foreground + ')',
				backgroundPosition: 'right bottom',
				backgroundRepeat: 'no-repeat',
			},
			content : {
				display: 'table-cell',
				verticalAlign: 'bottom',
				textShadow: '3px 3px #000'
			},
			back: {
				backgroundImage: 'url("' + this.props.background + '")',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}
		};
		return styles;
	}

	render() {

		const styles = this.getStyles();

		return(
			<Paper zDepth={3} >
				<div style={styles.back} className="tileLink">
					<a href={this.props.link} style={styles.container} className="tileLinkNavigationItem" >
						<span style={styles.content}>{this.props.linkTitle}</span>
					</a>
				</div>
			</Paper>
		);
	}
}


export default TileLink;

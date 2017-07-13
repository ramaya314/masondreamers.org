import React from 'react';

class AdvisoryBoardEntry extends React.Component
{

	getStyles() {
		const styles = {
			separator: {
				borderBottom: '1px dotted black',
				position: 'absolute',
				left: 0,
				right: 0,
				height: '70%',
			},
			container: {
				position: 'relative',
				textAlign: 'right',
				whiteSpace: 'nowrap',
				lineHeight: 1.5,

				overflow: 'hidden',
				textOverflow: 'ellipsis',
			},
			place: {
				width: 40,
			},
			left: {
				float: 'left',
				position: 'relative',
				background: 'white',
				marginRight: 20,
				paddingRight: 4,
			},
			right: {
				position: 'relative',
				background:'white',
				paddingLeft: 4,
			},
			mailAnchor: {
				color: "#508d24",
			}
		}
		return styles;
	}

	render() {

    	const styles = this.getStyles();

		return(
			<div style={styles.container} className="advisoryBoardEntry">

				<div style={styles.separator} ></div>

				<span style={styles.left} >
					<span style={styles.place} >
						{this.props.place}.
					</span>
					<a style={styles.mailAnchor} href={"mailto:" + this.props.email} > {this.props.email} </a>
				</span>
				<span style={styles.right} >
					{this.props.name}
				</span>
			</div>
		);
	}
}


export default AdvisoryBoardEntry;
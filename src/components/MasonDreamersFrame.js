import React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import getMuiTheme from '@material-ui/core/styles/getMuiTheme';

import AppThemeMason from '../themes/AppThemeMason';


class MasonDreamersFrame extends React.Component
{

	getStyles() {
		const styles = {
			mainBody: {
				font: '17px/1 "Oxygen", sans-serif',
				color: '#7c7c7c',
				background: '#ddd',
			},
		}
		return styles;
	}

	render() {

    	const styles = this.getStyles();

		return(
      		<MuiThemeProvider muiTheme={getMuiTheme(AppThemeMason)}>
      			<div style={styles.mainBody}>
      				{this.props.children}
		        </div>
      		</MuiThemeProvider>
		);
	}
}


export default MasonDreamersFrame;

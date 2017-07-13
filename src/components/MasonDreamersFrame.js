import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppThemeMason from '../themes/AppThemeMason';


class MasonDreamersFrame extends React.Component
{

	getStyles() {
		const styles = {
			mainBody: {
				font: '17px/1 "Oxygen", sans-serif',
				color: '#7c7c7c',
			},
		}
		return styles;
	}

	componentWillMount() {
		this.createMutationObserver();
	}

	createMutationObserver() {
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

		if (MutationObserver){
		    var target = document.querySelector('body'),

		        config = {
		            attributes            : true,
		            attributeOldValue     : false,
		            characterData         : true,
		            characterDataOldValue : false,
		            childList             : true,
		            subtree               : true
		        },

		        observer = new MutationObserver(function(mutations) {
		            window.parent.postMessage('[iframeResize]'+document.body.offsetHeight,'*');
		        });

		    observer.observe(target, config);
		}
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
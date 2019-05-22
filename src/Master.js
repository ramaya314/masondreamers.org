import React from 'react';

import AppRoutes from './AppRoutes'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppThemeMason from './themes/AppThemeMason';
const theme = createMuiTheme(AppThemeMason);


import './css/index.css';
import './css/font-awesome.min.css';
import './css/material-ui-styles.css';
import './css/bootstrap.css';

import {
	MainFooter,
	Spacer,
	StandardStyles
} from 'kokolib';

const MasterFactory = (map) => (
  			<div>

			    <MuiThemeProvider theme={theme} sheetsManager={map} >
						<div style={{
							font: '17px "Oxygen", sans-serif',
							color: '#7c7c7c',
							background: '#ddd',
						}}>
							<StandardStyles />
							{AppRoutes}
							<Spacer space={30} />

							<MainFooter orgName="Mason DREAMers"
			  				buttons={[
				  				{icon: 'facebook', name: 'facebook', link: "https://www.facebook.com/MasonDreaMers/"},
				  				{icon: 'twitter', name: 'Twitter', link: "https://twitter.com/masondreamers"},
				  				{icon: 'envelope', name: 'Mail', link: "mailto:gmumasondreamers@gmail.com"},
				  				{icon: 'instagram', name: 'Instagram', link: "https://www.instagram.com/masondreamers/"},
				  				{icon: 'youtube', name: 'Youtube', link: "https://www.youtube.com/channel/UC8LZpYov_7kqUB_ke29zEeQ"},
		  					]} />
						</div>
  				</MuiThemeProvider>

  			</div>
		);

export {MasterFactory};
export default MasterFactory(new Map());

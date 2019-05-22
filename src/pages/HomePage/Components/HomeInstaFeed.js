import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
import Paper from '@material-ui/core/Paper';

class HomeInstaFeed extends Component {

  shouldComponentUpdate() {
      return false;
  }

	render() {
		const instafeedTarget = 'instafeed'
		return(
			<Paper  style={{padding:15}} zDepth={3}>
				<div id={instafeedTarget}>
					<Instafeed
						limit='7'
						ref='instafeed'
						resolution='low_resolution'
						sortBy='most-recent'
						target={instafeedTarget}
					/>
				</div>
			</Paper>
		);
	}
}

export default HomeInstaFeed;

import React, { Component } from 'react';
import {connect} from 'react-redux';

import GridGallery from '../components/GridGallery';

class AboutUsGallery extends Component {

	render() {
		return (
			<GridGallery data={ {picRows: this.props.aboutUsPics}} opts={{
				xs:6,
				sm:6,
				md:6,
				lg:6
			}} />
		);
	} 
}

function mapStateToProps(state) {
	return({
		aboutUsPics: state.aboutUsPics
	})

}

export default connect(mapStateToProps)(AboutUsGallery);

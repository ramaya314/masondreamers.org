import React from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
	Spacer,
	DataContainer,
	BlogPost
} from 'kokolib';

class DreamBlog extends React.Component
{

    static propTypes = {
        maxResults: PropTypes.number,
        targetPageRoot: PropTypes.string
    };

    static defaultProps = {
        maxResults: 3,
        targetPageRoot: ""
    };


    renderData = (data) => {

    	let that = this;

    	let items = data.items || data;

    	items = items.slice(0, this.props.maxResults);

		return(
			<div>
				{items.map(function(post, i) {
					return (
						<div key={i}>
							<BlogPost  data={post} match={that.props.match} targetPageRoot={that.props.targetPageRoot} />
							<Spacer space={20} />
						</div>
					);
				})}
			</div>
		)
    }

	render() {

		if((this.props.data && this.props.data.length > 0)) {
			return this.renderData(this.props.data);
		}

		return(
			<DataContainer action="api/v1/GetBlog" 
				parameters={[
					{id:"maxResults", value: this.props.maxResults},
					{id:"pageToken", value: this.props.pageToken ? this.props.pageToken : ""}
				]}
				resultRender={this.renderData}>
			</DataContainer>
		);
	}
}



function mapStateToProps(state) {
	return({
		data: state.blogArchive
	})
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		onSelectPost: (post) => {
			return {
				type: "BLOG_POST_SELECTED",
				payload: post
			}
		}, onUpdateArchive: (archiveData) => {
			return {
				type: "BLOG_ARCHIVE_UPDATED",
				payload:archiveData
			}
		}}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DreamBlog);

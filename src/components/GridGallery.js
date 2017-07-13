import React, { Component } from 'react';

import { Thumbnail, Modal, Carousel,
			Col, Row } from 'react-bootstrap';

class GridGallery extends Component {

	constructor(props) {
		super(props);
		this.state = {
			galleryModalVisible: false,
			galleryCarouselIndex: 0,
			galleryCarouselDirection: null
		}
	}

	handleCarouselSelect = (selectedIndex, e) => {
		this.setState({
			galleryCarouselIndex: selectedIndex,
			galleryCarouselDirection: e.direction
		});
	};

	render() {

		const that = this;

		return (
			<div>
				{this.props.data.picRows.map(function(picRow, i) {
					return(
						<Row key={i}>
							{picRow.pics.map(function(pic, j) {
								return(
									<Col xs={that.props.opts.xs} 
										sm={that.props.opts.sm} 
										md={that.props.opts.md} 
										lg={that.props.opts.lg} 
										key={j}>
										<Thumbnail href="#" src={pic.source}  alt={pic.alt} 
												onClick={() => that.setState({
												 galleryModalVisible: true,
												 galleryCarouselIndex: pic.index,
												})}/>
									</Col>
								)	
							})}
						</Row>
					)
				})}

				<Modal show={this.state.galleryModalVisible}
					onHide={() => this.setState({ galleryModalVisible: false })} >
					<Modal.Body>
						<Carousel activeIndex={this.state.galleryCarouselIndex} direction={this.state.galleryCarouselDirection} onSelect={this.handleCarouselSelect}>
							
							{this.props.data.picRows.map(function(picRow, i) {
								return(
									picRow.pics.map(function(pic, j) {
										return(
											<Carousel.Item key={j}>
												<img width={900} height={500} src={pic.source} alt={pic.alt} />
											</Carousel.Item>
										)
									})
								)	
							})}
						</Carousel>
					</Modal.Body>
				</Modal>
			</div>
		);
	} 
}


export default GridGallery;
import React from 'react';

import Waypoint from 'react-waypoint';

import Dimensions from 'react-dimensions';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav,
			Image, Grid, Row, Col} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

class MainNavBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			navbarBrandVisible: false
		}
		console.log(this.props.width);
	}

	getStyles() {

		let smallScreen = this.props.containerWidth < 768;
		const styles = {
			headerBanner: {
				backgroundImage: 'url("' + this.props.backgroundImage + '")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
				margin: 0,
				padding: 0,
				border: 0,
				height: smallScreen ? 250 : 500,
				textAlign: 'center',
				position: 'relative'
			},
			navBar: {
				backgroundColor: (this.state.navbarBrandVisible || smallScreen ? 'rgb(0, 105, 64)' : 'transparent'),
				border:0,
			},
			bannerLegend: {
				//color: '#508d24',
				//color: '#fff',
				color: 'rgb(254, 190, 16)',
				fontSize: 'xx-large',
				fontWeight: 'bold',
				textShadow: '2px 2px #000',
			},
			bannerContent: {
				textAlign: 'center',
				position: 'absolute',
				top: smallScreen ? 75 : 150,
				width: '100%',
				zIndex: 14
			},
			bannerLogo: {
				marginLeft: 'auto',
				marginRight: 'auto',
				width: smallScreen ? '40%' : 'auto',
				maxWidth: smallScreen ? 200 : 'inherit',
			},
			bannerScreen: {
				position: 'relative',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				backgroundColor: 'rgba(0,0,0,0.2)',
				zIndex:1,
			},
			bannerTitle: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				marginLeft: 0,
				color: 'rgb(254, 190, 16)',
				fontSize: '3em',
				fontWeight: 'bold',
				textShadow: '2px 2px #000',
				textAlign: 'left',
				zIndex: 15,
			},
		}
		return styles;
	}

	handleWaypointOnPositionChange = ({ previousPosition, currentPosition }) => {
		this.setState({
			navbarBrandVisible: currentPosition === 'above'
		});
	};


	render() {

    	const styles = this.getStyles();

		return(
			<div>
				<Navbar inverse collapseOnSelect staticTop fixedTop fluid style={styles.navBar} expanded={this.state.navbarExpanded} 
				className= {(this.state.navbarBrandVisible || this.props.containerWidth < 768? "mainNavBar" :  "")}
					>
					<Navbar.Header>
						{this.state.navbarBrandVisible && 
							<Navbar.Brand>
								<a href="/" className="headerLogo">
									<Image src="/images/logoWhite.png" responsive />
								</a>
							</Navbar.Brand>
						}
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavDropdown eventKey={1} title="About Us" id="basic-nav-dropdown">
								<LinkContainer to="/">
									<MenuItem eventKey={1.1} >Who We Are</MenuItem>
								</LinkContainer>
								<LinkContainer to="/meetOurTeam">
									<MenuItem eventKey={1.2} >Meet Our Team</MenuItem>
								</LinkContainer>
								<LinkContainer to="/advBoard">
									<MenuItem eventKey={1.3} >2016-17 Advisory Board</MenuItem>
								</LinkContainer>
								<LinkContainer to="/contactus">
									<MenuItem eventKey={1.3} >Contact Us</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/news">
								<NavItem eventKey={2} >News</NavItem>
							</LinkContainer>
							<NavDropdown eventKey={3} title="Events" id="basic-nav-dropdown2">
								<LinkContainer to="/events">
									<MenuItem eventKey={3.1}>Events</MenuItem>
								</LinkContainer>
								<LinkContainer to="/gallery">
									<MenuItem eventKey={3.3} >Gallery</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/resources">
								<NavItem eventKey={4} >Resources</NavItem>
							</LinkContainer>
							<LinkContainer to="/supportus">
								<NavItem eventKey={5} >Support Us</NavItem>
							</LinkContainer>
							<LinkContainer to="/becomeanally">
								<NavItem eventKey={6} >Become an Ally</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>


	  			<div style={styles.headerBanner}>

					<div style={styles.bannerScreen} className="headerBannerScreen" />
					<div style={styles.bannerContent}>
						<Waypoint onPositionChange={this.handleWaypointOnPositionChange} />
						<div>
							{this.props.bannerContent ? this.props.bannerContent :
								<div>
									<a href="/" className="headerLogo">
										<Image src="/images/logoWhite.png" responsive style={styles.bannerLogo} rounded/>
				  					</a>
				  				</div>
							}
						</div>
					</div>

					{this.props.pageTitle && 
						<div style={styles.bannerTitle}>
							<Grid>
								<Col xs={12} >
									<Row>
										{this.props.pageTitle}
									</Row>
								</Col>
							</Grid>
						</div>
					}

	  			</div>

			</div>
		);
	}
}


export default Dimensions()(MainNavBar);
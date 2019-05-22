import React from 'react';


import {
	ImageHeaderBanner,
	PrimaryNavBar,
} from 'kokolib';

class MainNavBar extends React.Component {

	render() {

		return(
			<div className="mainNavBarTopContainer">

				<PrimaryNavBar visibilityToggleOffset={100} inverse
					logoImagePath="/images/logoWhite.png"
					navigationScheme={[
						{
							title: "Home",
							link: "/",
							children: []
						},
						{
							title: "About Us",
							children: [
								{
									title: "Who We Are",
									link: "/aboutUs",
									children: []
								},
								{
									title: "Meet Our Team",
									link: "/meetOurTeam",
									children: []
								},
								{
									title: "2016-17 Advisory Board",
									link: "/advBoard",
									children: []
								},
								{
									title: "Join Mason DREAMers Rapid Response Team",
									link: "/joinrapidresponseteam",
									children: []
								},
							]
						},
						{
							title: "News",
							link: "/news",
							//mdHidden: true,
							//lgHidden: true,
							children: []
						},
						{
							title: "Events",
							children: [
								{
									title: "Events",
									link: "/events",
									children: []
								},
								//{
								{
									title: "Gallery",
									link: "/gallery",
									children: []
								}
							]
						},
						{
							title: "Contact",
							link: "/contactus",
							children: []
						},
						{
							title: "Resources",
							link: "/resources",
							children: [
								{
									title: "Resources",
									link: "/resources",
									children: []
								},
								{
									title: "Scholarships",
									link: "/scholarships",
									children: []
								}
							]
						},
						{
							title: "Support Us",
							link: "/supportus",
							children: []
						},
						{
							title: "Become an Ally",
							link: "/becomeanally",
							children: []
						}
					]}/>

				<ImageHeaderBanner bannerLogoImagePath="/images/logoWhite.png"
					backgroundImage={this.props.backgroundImage}
					fixedAttachment={true}
					pageTitle={this.props.pageTitle} />


			</div>
		);
	}
}


export default MainNavBar;

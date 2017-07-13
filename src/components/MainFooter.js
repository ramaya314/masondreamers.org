import React from 'react';

class MainFooter extends React.Component {

	getStyles() {
		const styles = {
			footer: {
				backgroundColor: 'rgb(0, 105, 64)',
			},
		}
		return styles;
	}

	render() {

    	const styles = this.getStyles();

		return(

  			<div style={styles.footer} id="footer">
  				<div className="contact">
					<ul className="icons">
						<li><a className="icon fa-facebook" href="https://www.facebook.com/MasonDreaMers/"><span className="label">Facebook</span></a></li>
						<li><a className="icon fa-twitter" href="https://twitter.com/masondreamers"><span className="label">Twitter</span></a></li>
						<li><a className="icon fa-envelope" href="mailto:gmumasondreamers@gmail.com"><span className="label">Mail</span></a></li>
						<li><a className="icon fa-instagram" href="https://www.instagram.com/masondreamers/"><span className="label">Instagram</span></a></li>
						<li><a className="icon fa-youtube" href="https://www.youtube.com/channel/UC8LZpYov_7kqUB_ke29zEeQ"><span className="label">Dribbble</span></a></li>
					</ul>

					<div className="copyright">
						<ul className="menu">
							<li>&copy; Mason DREAMers. All rights reserved.</li>
						</ul>
					</div>
				</div>
  			</div>
		);
	}
}


export default MainFooter;
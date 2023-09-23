import { Component } from "react";

import './footer.css';


class Footer extends Component {
	render() {
		return (
			<div className="footer__container">
				<nav className="nav">
					<img className="logo" src={process.env.PUBLIC_URL + './images/logo.svg'} alt="logo" />
					<ul className="nav__list">
						<li className="nav__item">Coffee house</li>
						<li className="nav__item">Our coffee</li>
						<li className="nav__item">For your pleasure</li>
					</ul>
				</nav>
				<img className="about-us__decor" src={process.env.PUBLIC_URL + './images/decor-dark.svg'} alt="decor" />
			</div>
		)
	}
}

export default Footer;
import { Component } from "react";

import './header.css';

class Header extends Component {
	render() {
		return (
			<header className="header-home">
				<nav className="nav">
					<img className="logo" src={process.env.PUBLIC_URL + './images/logo.svg'} alt="logo" />
					<ul className="nav__list">
						<li className="nav__item">Coffee house</li>
						<li className="nav__item">Our coffee</li>
						<li className="nav__item">For your pleasure</li>
					</ul>
				</nav>
				<div className="header-home__content">
					<h1 className="header-home__content-title">
						Everything You Love About Coffee
					</h1>
					<img className="header-home__content-decor" src={process.env.PUBLIC_URL + './images/decor.svg'} alt="decor" />
					<p className="header-home__content-text">
						We makes every day full of energy and taste
					</p>
					<p className="header-home__content-text">
						Want to try our beans?
					</p>
					<button className="header-home__content-btn">More</button>
				</div>
			</header>
		)
	}
}

export default Header;
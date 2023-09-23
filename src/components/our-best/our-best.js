import { Component } from "react";

import './our-best.css';


class OurBest extends Component {
	render() {
		return (
			<div className="our-best">
				<div className="our-best__container">
					<h2 className="our-best__title">
						Our best
					</h2>
					<ul className="our-best__list">
						<li className="our-best__item">
							<img className="our-best__product" src={process.env.PUBLIC_URL + './images/solimo-coffee.jpg'} alt="product-img" />
							<p className="our-best__descr">Solimo Coffee Beans 2 kg</p>
							<span className="our-best__price">10.73$</span>
						</li>
						<li className="our-best__item">
							<img className="our-best__product" src={process.env.PUBLIC_URL + './images/presto-coffee.jpg'} alt="product-img" />
							<p className="our-best__descr">Presto Coffee Beans 1 kg</p>
							<span className="our-best__price">15.99$</span>
						</li>
						<li className="our-best__item">
							<img className="our-best__product" src={process.env.PUBLIC_URL + './images/aromistico-coffee.jpg'} alt="product-img" />
							<p className="our-best__descr">AROMISTICO Coffee 1 kg</p>
							<span className="our-best__price">6.99$</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default OurBest;
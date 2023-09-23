import { Component } from "react";

import Header from '../header/header';
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";

import './app.css';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<AboutUs />
				<OurBest />
				<Footer />
			</>
		)
	}
}

export default App;
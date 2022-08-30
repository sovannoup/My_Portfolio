import React, { Component } from "react"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import { APP_REFRESH } from "./modules/app/reducer"

import PageNotFoundComponent from "./screens/PageNotFound"
import Metatages from "./screens/metatages"
import { store } from "./store"
import Home from "./screens/HomePage/Home"
import About from './screens/AboutPage/About'
import Navbar from "./screens/NavMenu"
import Project from './screens/ProjectPage/Project'
import Contact from './screens/ContactPage/Contact'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		if (window.performance) {
			if (performance.navigation.type === 1) {
				store.dispatch({ type: APP_REFRESH })
			}
		}
	}
	render() {
		return (
			<div>
				<Router>
					<Route component={Metatages} />
					<Navbar />
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/home" />} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Project} />
						<Route exact path="/contact" component={Contact} />
						<Route component={PageNotFoundComponent} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App

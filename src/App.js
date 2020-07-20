import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { getStateData } from './actions/state_action'

import store from './store'

//Components Import
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'


class App extends React.Component {
	render() {
		store.dispatch(getStateData())
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage} />
						<Route path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />
						<Route path={`${process.env.PUBLIC_URL}/signin`} component={Signin} />
						<Route path={`${process.env.PUBLIC_URL}/home`} component={Home} />
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feeds from '../../components/Feeds/Feeds';

function Main() {
	return (
		<main className="row span-100-12 horizontal-center">
			<Switch>
				<Route exact path="/" component={Feeds} />
				<Route exact path="/profile/:username" component={Feeds} />
			</Switch>
		</main>
	)
}

export default Main;
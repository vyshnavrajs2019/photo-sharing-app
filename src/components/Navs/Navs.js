import React from 'react';
import { NavLink } from 'react-router-dom';

function Navs() {
	return (
		<div className="row span-100-12">
			<NavLink to="/" className="anchor-text ml-1">Feeds</NavLink>
			<NavLink to="/" className="anchor-text ml-05">Login</NavLink>
			<NavLink to="/" className="anchor-text ml-05">Create Account</NavLink>
		</div>
	)
}

export default Navs;
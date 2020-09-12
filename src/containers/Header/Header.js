import React from 'react';
import Search from '../../components/Search/Search';
import Navs from '../../components/Navs/Navs';

function Header() {
	return (
		<header className="row span-100-12 p-1 vertical-center card">
			<h3 className="row span-100-3">picshare</h3>
			<div className="row span-100-6">
				<Search />
			</div>
			<div className="row span-100-3">
				<Navs />
			</div>
		</header>
	)
}

export default Header;
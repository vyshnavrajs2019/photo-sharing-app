import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Main />
		</BrowserRouter>
	);
}

const mapStateToProps = state => ({
	pics: state.pics
});

export default connect(mapStateToProps)(App);
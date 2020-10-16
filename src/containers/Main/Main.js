import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Feeds from '../../components/Feeds/Feeds';
import Profile from '../Profile/Profile';
import Modal from '../../components/UI/Modal/Modal';

function Main(props) {
	return (
		<main className="row span-100-12 horizontal-center">
			<Switch>
				<Route exact path="/" component={Feeds} />
				<Route exact path="/profile/:username" component={Profile} />
			</Switch>
			{props.modal.isOpen ? <Modal modalProps={props.modal.modalProps} /> : null}
		</main>
	)
}

const mapStateToProps = state => {
	return {
		modal: state.modal
	}
}

export default connect(mapStateToProps)(withRouter(Main));
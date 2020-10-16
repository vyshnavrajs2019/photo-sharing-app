import React, { Component } from 'react';
import { FULL_PIC_MODAL } from '../../../../store/reducers/modal';
import { openModal } from '../../../../store/actions/modal';
import { connect } from 'react-redux';

class Pic extends Component {
	handleClick = () => {
		if (this.props.openModalWhenClicked === true)
			this.props.openModal(this.props.pic);
	}

	render() {
		return (
			<div className="row span-100-12 card p-05 img img-contain">
				<img onClick={this.handleClick} src={this.props.pic.imgURL} alt="" />
			</div>
		)
	}
}

const mapActionToProps = dispatch => ({
	openModal: pic => dispatch(openModal(FULL_PIC_MODAL, { pic }))
});

export default connect(null, mapActionToProps)(Pic);
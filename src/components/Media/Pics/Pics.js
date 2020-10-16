import React from 'react';
import Pic from './Pic/Pic';
import classes from './Pics.module.css';

function Pics(props) {
	const { pics } = props;
	const picsArray = pics.length ? pics.map(pic => <div key={pic.pk}><Pic openModalWhenClicked pic={pic} /></div>) : <div className="row span-100-12 p-1 light-gray small muted text-center">No Pics</div>

	return (
		<div className={classes.Pics + " row span-100-12"}>
			{picsArray}
		</div>
	)
}

export default Pics;
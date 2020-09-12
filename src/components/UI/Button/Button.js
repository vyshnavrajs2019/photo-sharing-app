import React from 'react';

function Button(props) {
	return (
		<button
			className={"row span-100-12 btn " + props.classes}
			type={props.type}
			onClick={props.handle}>
			{props.label}
		</button>
	)
}

export default Button;
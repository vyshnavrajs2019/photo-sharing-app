import React from 'react';

function Button(props) {
	return (
		<button
			className={"row span-100-12 btn horizontal-center " + props.classes}
			type={props.type}
			onClick={props.handleClick}>
			{props.label}
		</button>
	)
}

export default Button;
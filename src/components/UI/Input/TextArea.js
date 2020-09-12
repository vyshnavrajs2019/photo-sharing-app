import React from 'react';

function TextArea(props) {
	return (
		<textarea
			onChange={props.changeHandler}
			className={"row span-100-12 input " + props.classes}
			name={props.name}
			value={props.value}
			placeholder={props.placeholder}>
		</textarea>
	)
}

export default TextArea;
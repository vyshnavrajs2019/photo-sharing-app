import React from 'react';

function Input(props) {
	return (
		<input 
			onChange={props.changeHandler}
			className={"row span-100-12 input " + props.classes}
			type={props.type} 
			name={props.name} 
			value={props.value}
			placeholder={props.placeholder} />
	)
}

export default Input;
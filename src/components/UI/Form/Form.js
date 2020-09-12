import React from 'react';

function Form(props) {
	return (
		<form
			className={"row span-100-12 " + props.classes}
			method={props.method} 
			onSubmit={props.submitHandler} 
			onReset={props.resetHandler}>
				{props.children}
		</form>
	)
}

export default Form;
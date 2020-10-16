import React from 'react';

function Form(props) {
	return (
		<form
			style={{position: "relative"}}
			className={"row span-100-12 " + props.classes}
			method={props.method || "GET"} 
			onSubmit={(event) => {event.preventDefault(); if (props.submitHandler) props.submitHandler() ;}} 
			onReset={props.resetHandler || (() => {})}>
				{props.children}
		</form>
	)
}

export default Form;
import React, { Component } from 'react'

/*
 
{
	formHeader: {
		classes: "",
		method: "POST",
		title: {
			text: "A Login Form",
			size: "sm"
		}
	},
	formBody: [
		{
			isGroup: true,
			groupElements: [
				{
					label (unique): "",
					element: {
						type: "password",
						name: "",
						classes: "",
						placeholder: "",
						defaultValue: "",
						validations: [
							{
								callback: (...args) => hasMinLength(...args),
								error: {
									msg: MIN_LENGTH,
									params: {  }
								}
							}
						]
					}
				},
			]
		},
		{
			label (unique): "",
			showLabel: false,
			element: {
				type: "password" | "button" | "text" | "select" | "option" | "checkbox" | "radio",
				name: "",
				classes: "",
				placeholder: "",
				defaultValue: "",
				validations: [
					{
						callback: (...args) => hasMinLength(...args),
						error: {
							msg: MIN_LENGTH,
							params: {  }
						}
					}
				]
			}
		},
		{
			label (unique): "",
			element: {
				notInputElement: true,
				template: <Template />
			}
		}
	],
	formFooter: [
		{

		}
	]
}

 */


export class PForm extends Component {
	render() {
		return (
			<form method={this.props.method}>

			</form>
		)
	}
}

export default PForm

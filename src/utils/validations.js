export const MIN_LENGTH = "{0} must have atleast {1} characters";
export const VALUE_NOT_AVAILABLE = "{0} has been taken. Try a different one";
export const PASSWORDS_DONOT_MATCH = "{0} do not match";
export const INVALID_CREDENTIALS = "Invalid credential(s)";

export const validationMessage = (msg, params = {}) => {
	let outputMsg = msg;
	Object.entries(params).forEach(([key, value]) => {
		outputMsg = outputMsg.replace(`{${key}}`, value);
	});
	return outputMsg;
}

export const validateLength = (objectToValidate, { minLength, maxLength }) => {
	if (minLength && !(objectToValidate.length >= minLength))
		return false;
	if (maxLength && !(objectToValidate.length <= maxLength))
		return false;
	return true;
}
export const deepCopy = object => {
	if (Array.isArray(object)) {
		return object.map(_ => deepCopy(_));
	} else if (typeof object === "object" && object !== null) {
		const clonedObject = {};
		Object.entries(object).forEach(([key, value]) => {
			clonedObject[key] = deepCopy(value);
		});
		return clonedObject;
	} else {
		return object;
	}
};
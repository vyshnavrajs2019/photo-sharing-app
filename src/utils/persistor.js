export const save = (key, data) => {
	const jsonData = JSON.stringify(data);
	localStorage.setItem(key, jsonData);
}

export const load = (key) => {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : data;
}
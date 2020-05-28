import axios from 'axios';
import * as config from '../constants/config';
const callAPI = async (endpoint, method = "GET", data) => {
	let dataAPI = null;
	try {
		dataAPI = await axios({
			method,
			url: `${config.Url}/${endpoint}`,
			data,
		});
	} catch (e) {
		console.log(e.response);
		dataAPI = e.response
	} finally {
		return dataAPI;
	}
}

const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}

export { callAPI, setAuthToken }
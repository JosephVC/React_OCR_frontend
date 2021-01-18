import axios from 'axios';
import { useHistory } from 'react-router-dom';

const GoogleSocialAuth = (accesstoken) => {
	console.log(accesstoken);
	axios
		// uncomment the below line for local development, comment out when deploying app
		// .post('http://127.0.0.1:8000/auth/convert-token', {
		// use the below line for when the app is deployed
		.post('https://django-ocr-backend.herokuapp.com/auth/convert-token', {
			token: accesstoken,
			backend: 'google',
			grant_type: 'convert_token',
			client_id: 'I0NIqCe66uALeKFsmnVe57ti92sHBhOqhtml9CQT',
			client_secret:
				'yukhwjKzhaWCo3KdxidoDWqkwJsamYS4u62jmgKSJDRL9B3itufHPMSDHyFlvfLVWMm4DSN4ppxteETfwznzBk4Pqk4jmxZzlXejFRd7NARUtCIAJ1PVgjZfnoKnw3E4',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default GoogleSocialAuth;
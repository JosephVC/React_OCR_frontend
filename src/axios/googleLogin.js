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
			// this is the client id of your Django application
			client_id: 't7E9vAqhehh5GXbuOjvTZXzBuEOljNgn9cJksobb',
			// same with the client secret
			client_secret:
				'NwJM5jH3ZWMwsUs6stWdEpYCfR8U52MnWmmerMBcJfZwpbOSFz4bVPdNyh9Vq9kje8f8NEFqj1M1SDxG7oMKuR5P6cRWcBMVwdW2QQkScG1qghZy6cE0SCETqyJVbrL3',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default GoogleSocialAuth;
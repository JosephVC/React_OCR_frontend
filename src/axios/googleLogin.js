import axios from 'axios';
import { useHistory } from 'react-router-dom';

const GoogleSocialAuth = (accesstoken) => {
	console.log(accesstoken);
	axios
		// uncomment the below line for local development, comment out when deploying app
		.post('http://127.0.0.1:8000/auth/convert-token', {
		// use the below line for when the app is deployed
		// .post('https://django-ocr-backend.herokuapp.com/auth/convert-token', {
			token: accesstoken,
			backend: 'google',
			grant_type: 'convert_token',
			// this is the client id of your Django application
			client_id: 'ulIMl0Ms2LnEEPNolZXnLB3HwziPbEIFRwMDlN2x',
			// same with the client secret
			client_secret:
				'ghFnD3lvWejHiPZRNUV3fbMh5PG94CR2Fc6ukhGPyQaRrqNbbhKIR0MVTrxy40Y6Xcowg5pm6r4Ubm2xr6VZenJyuUpdemiFAgQl7PTsWaYb7OusG7HFO6kuMn0CLMUr',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default GoogleSocialAuth;
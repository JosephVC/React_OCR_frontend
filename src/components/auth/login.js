import React, { useState } from 'react';
import axiosInstance from '../../axios/login';
import { useHistory } from 'react-router-dom';
import GoogleLogin  from 'react-google-login';
import GoogleSocialAuth from '../../axios/googleLogin';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post('auth/token', {
				grant_type: 'password',
				username: formData.email,
				password: formData.password,
				// this is the client id in your respective Django
				client_id: 't7E9vAqhehh5GXbuOjvTZXzBuEOljNgn9cJksobb',
				// same with the client secret
				client_secret:
					'NwJM5jH3ZWMwsUs6stWdEpYCfR8U52MnWmmerMBcJfZwpbOSFz4bVPdNyh9Vq9kje8f8NEFqj1M1SDxG7oMKuR5P6cRWcBMVwdW2QQkScG1qghZy6cE0SCETqyJVbrL3',
			})
			.then((res) => {
				console.log(res);
				localStorage.setItem('access_token', res.data.access_token);
				localStorage.setItem('refresh_token', res.data.refresh_token);
				history.push('/');
				window.location.reload();
			});
	};

	const responseGoogle = (response) => {
		console.log(response);
		GoogleSocialAuth(response.access_token);
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					<GoogleLogin
						clientId="307917986361-nmabhdbesnokto3f0tnb200qk3qed7g3.apps.googleusercontent.com"
						buttonText="Google Login"
      					onSuccess={responseGoogle}
    					onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
					
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
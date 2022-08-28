function Login() {
	function handlerFormSubmit(event) {
		event.preventDefault();
		// console.log(event.target.username.value);
		// console.log(event.target.password.value);

		const userData = {
			username: event.target.username.value,
			password: event.target.password.value,
		};

		console.log(userData);
		alert(JSON.stringify(userData));

		console.log({ username: event.target.username.value });
		console.log({ password: event.target.password.value });
	}
	return (
		<>
			<h1>Login Form</h1>
			<form onSubmit={handlerFormSubmit}>
				<label>
					Username:
					<input type="text" name="username" />
				</label>
				<label>
					Password:
					<input type="text" name="password" />
				</label>
				<button type="submit">Login</button>
			</form>
		</>
	);
}

export default Login;

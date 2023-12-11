import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../backend/config/firebase";
import '../../styles/SignIn.css';
import { useNavigate } from "react-router-dom";
/*Transition entre SignIn et SignUp
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
*/


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
		navigate("/dashboard");
		localStorage.setItem("auth","true");

      })
      .catch((error) => {
		setErrorMessage("Email ou mot de passe incorrect.");
        console.log(error);
      });
  };

  return (
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form onSubmit={signIn}>
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
			<a href="#">Forgot your password?</a>
			<button type="submit">Sign In</button>
			{errorMessage && <p>{errorMessage}</p>}
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello !</h1>
				<p>Enter your personal details and start journey with us</p>
			</div>
		</div>
	</div>
</div>

    
  );
};

export default SignIn;

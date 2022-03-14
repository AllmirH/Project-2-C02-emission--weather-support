
const form1 = document.getElementById('form1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener ('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

console.log("Hello from our Js");

const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
	let messages = []

	if (name.value === '' || name.value == null) {
		messages.push('Name is required');
	}
}

	if (password.value.length <=6) 
	{
	messages.push('Password must be longer than 6 characters')
	}

	if (password.value.length > 0) {
	messages.push('Password must be less than 20 characters')
	}

	if (password.value === 'password') {
	messages.push('Password cannot be password')
	}

if (messages.length > 0) {
e.preventDefault()
	errorElement.innerText = messages.join(',  ')
}
)}

async function loadUsers() {
	return (await fetch("data/users.json")).json();
}
document.addEventListener("DOMContentLoaded", async () => {
	 let users = [];
	 try {
		 users = await loadUsers();
	 }  catch (e) {
		 console.log("Error!");
		 console.log(e);
	 }
     console.log(users);
 });














// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
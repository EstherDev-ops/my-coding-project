const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');


registerBtn.addEventListener('click', () =>{
     container.classList.add('active');
});

loginBtn.addEventListener('click', () =>{
     container.classList.remove ('active');
});


const loginPassword = document.getElementById('loginPassword');
const toggleLoginPassword = document.getElementById('toggleLoginPassword');

toggleLoginPassword.addEventListener('click', function () {
  const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPassword.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});


const registerPassword = document.getElementById('registerPassword');
const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');

toggleRegisterPassword.addEventListener('click', function () {
  const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  registerPassword.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});







function handleLogin(event) {
     event.preventDefault();
     alert("Login succcessful!");
}

function handleRegister(event){
     event.preventDefault();
     const email =document.querySelector('input[type="email"]').value;
     const password = document.getElementById('registerPassword').value;

     if(!email.includes('@')){
          alert('Please enter a valid email address.');
          return;
     }

     if(password.length < 6){
          alert('password must be atleast 6 characters.');
          return;
     }
     alert("Registration succefully!");
}

function forgotPassword() {
     const email = prompt("Please enter your email address to reset your password:");
     if(email) {
          alert("A password reset link has been sent to " + email + "./nPlease check your inbox or spam folder.");
     }
}
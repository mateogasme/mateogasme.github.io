
// Switch
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

// // Google

// // Close de Window
// const login = document.querySelector('#login');
// const googleLoginCloseWindow = document.querySelector('#close-window');

// googleLoginCloseWindow.addEventListener('click', () => {
//     login.classList.remove('active');
// });

// // Login with Google
// const btnGoogleLogin = document.querySelector('#google-register');

// googleButton.addEventListener("click", (e) => {
//     e.preventDefault()
  
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider).then((result) => {
//         console.log(result);
//         console.log("google sign in");
//     })
//     .catch(err => {
//         console.log(err);
//     })
// });
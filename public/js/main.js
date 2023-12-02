


window.addEventListener('load', function () {


//GOOGLE SIGN IN HERE
  document.getElementById('Gbtn').addEventListener('click', function () {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  })
  
    document.getElementById('Gbtn').addEventListener('click', function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Loggin succesful', result.user);
                window.location.href = "./home.html";
            })
            .catch(function (error) {
                    console.log('Loggin failed :(', error);
                })

    });   
    

//PHONE SIGN IN HERE
    firebase.auth().languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('CaptchaBOX');




function getPhoneNumberFromUserInput(){ 
return "+16723384491"
}


document.getElementById('PHbtn').addEventListener('click', function () {
const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      window.location.href = "./home.html";     
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    }); 

document.getElementById('PHloggin').addEventListener('click', function () {

  function getCodeFromUserInput(){
    var PHcode = document.getElementById('PHcode').value;
    return PHcode;
  }

  const code = getCodeFromUserInput();
  confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  window.location.href = "./home.html";
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  
});
}); 
  })            
//EMAIL & PASSWORD SIGN IN HERE
document.getElementById('SIbtn').addEventListener('click', function () {
  
  var email1 = document.getElementById('account_email').value;
  var password1 = document.getElementById('account_passwd').value;
  
  firebase.auth().signInWithEmailAndPassword(email1, password1)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "./home.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });



});
  });

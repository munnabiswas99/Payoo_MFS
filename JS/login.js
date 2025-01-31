// console.log("JS file connected")

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Login button clicked')

    const phoneNumber = document.getElementById('phone-num').value;
    const pinNumber = document.getElementById('pin-num').value;
    
    if(phoneNumber === '4868' && pinNumber === '1234'){
        console.log('You are logged in')
        window.location.href = '\home.html'
    }

    else{
        alert('Invalid phone number or pin')
    }
})
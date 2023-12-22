document.getElementById('signup-form').onsubmit = function() {
    const email = document.getElementById('email');
    const name = document.getElementsByName('name');
    const password = document.getElementsByClassName('password');
    const phone = document.querySelectorAll('.phone');
    const location = document.querySelector('.location');
    const isWoman = document.getElementById('woman');
    const isMan = document.getElementById('man');
    
    console.log(email.value);
    console.log(name[0].value);
    console.log(password[0].value);
    console.log(password[1].value);
    console.log(phone[0].value);
    console.log(phone[1].value);
    console.log(phone[2].value);
    console.log(location.value);
    console.log(isWoman.value);
    console.log(isMan.value);
    return false;
}
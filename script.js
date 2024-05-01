const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errormsg = document.querySelector('.errorMsg');
const infoPg = document.querySelector('.info');
const bgImg = document.querySelector('.bg');
const successPg = document.querySelector('.success');
const email = document.querySelector('.emailGiven');
const inp = document.querySelector('input');
const dis = document.querySelector('.dismiss');

form.addEventListener('submit',function(event) {
    event.preventDefault();
    if (validateEmail(emailInput.value)) {
        infoPg.classList.add('active');
        bgImg.classList.add('active');
        successPg.classList.remove('active');
        email.textContent=emailInput.value;

    }
    else {
        errormsg.classList.add('active');
        inp.classList.add('active');
    }

});

function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

dis.addEventListener('click', () => {
    infoPg.classList.remove('active');
    bgImg.classList.remove('active');
    successPg.classList.add('active');
    errormsg.classList.remove('active');
    inp.classList.remove('active');
})
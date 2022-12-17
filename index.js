const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('contactForm')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("click");

    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})
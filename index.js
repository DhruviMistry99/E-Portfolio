//template_fl0l32d
//service_cb6ce1s
//e8razhg9Z3wrnWGVW

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_cb6ce1s' ,
            'template_fl0l32d',
            event.target,
            'e8razhg9Z3wrnWGVW'
        ) .then(() => {
            console.log('this worked')
        })
}
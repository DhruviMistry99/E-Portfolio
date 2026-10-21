
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes=document.querySelectorAll(".shape");
    const x=event.clientX * scaleFactor;
    const y=event.clientY * scaleFactor;
    
    for(let i = 0; i < shapes.length; ++i) {
        const isodd = i % 2 !== 0;
        const boolInt = isodd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_cb6ce1s',
            'template_fl0l32d',
             event.target,
            'e8razhg9Z3wrnWGVW'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch((error) => {
            console.error(error);
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at your covenience."
            );
    })
}

//TOOGALMODEL

function toggleModal() {
    //isModalOpen = !isModalOpen;
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove ("modal--open");
    
    }
    isModalOpen = true;
    document.body.classList  += "modal--open";
}


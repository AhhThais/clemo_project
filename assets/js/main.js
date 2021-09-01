const messageForm = document.querySelector('.js_message')
const contactClickBtn = document.querySelectorAll('.js_click_btn')
const contactForm = document.querySelector('.js_contact')

function clickChangeForm() {
    contactForm.classList.add('close')
    messageForm.classList.add('show')
}

for (const contactClick of contactClickBtn) {
    contactClick.addEventListener('click', clickChangeForm)
}
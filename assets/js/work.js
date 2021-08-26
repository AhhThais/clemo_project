const tagsBtn = document.querySelectorAll('.js_tags')

function enableOnTag() {
    console.log('Hello')
}

for (const tagBtn of tagsBtn) {
    tagBtn.addEventListener('click', enableOnTag)
}
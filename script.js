const modal = document.querySelector('.background')
const btn = document.querySelector('#modal-btn')
const closeBtn = document.querySelector('#modal-close')
btn.addEventListener('click', () => {
    modal.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
})
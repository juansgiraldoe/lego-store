const spiderman = document.querySelector('.spiderman')
const robin = document.querySelector('.robin')
const batman = document.querySelector('.batman')
const modal = document.querySelector('.modal')
const hiddenModal = document.querySelector('.close__modal')

spiderman.addEventListener('click', showModal)
robin.addEventListener('click', showModal)
batman.addEventListener('click', showModal)
hiddenModal.addEventListener('click', closeModal)

function showModal() {
  modal.classList.remove('hidden')
}
function closeModal() {
  modal.classList.add('hidden')
}
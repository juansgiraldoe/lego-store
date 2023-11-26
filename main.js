const heroes = document.querySelectorAll('#hero')
const modal = document.querySelector('.modal')
const hideModal = document.querySelector('.modal_container--close')

heroes.forEach(hero => {
  hero.addEventListener('click', showModal);
});

modal.addEventListener('click', closeModal)
hideModal.addEventListener('click', closeModal)

function showModal() {
  modal.classList.remove('hidden')
  modal.classList.add('visible')
}
function closeModal() {
  modal.classList.add('hidden')
  modal.classList.remove('add')
}
const buttonOpenModal = document.geElementById ('openModal')

const modalWrapper = document.querySelector ('.modal-wrapper0')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}
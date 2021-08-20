'use strict';

(() => {
    const modals = Array.from(document.querySelectorAll('.modal'));
    modals.forEach(modal => {
        modal.querySelector('.modal__body-child').addEventListener('click', (evt) => { evt.stopPropagation(); });
        modal.querySelector('.modal__body-parent').addEventListener('click', () => { modal.querySelector('.modal__close-in-button').click(); })
    })
})();
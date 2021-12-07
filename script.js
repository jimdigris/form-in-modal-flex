'use strict';
// закрывает всплывающее окно по клику вне его
(function () {
    const modals = Array.from(document.querySelectorAll('.modal'));
    modals.forEach(modal => {
        modal.querySelector('.modal__body-child').addEventListener('click', (evt) => { evt.stopPropagation(); });
        modal.querySelector('.modal__body-parent').addEventListener('click', () => { modal.querySelector('.modal__close-in').click(); })
    });
})();

// делает не активной кнопку Отправить, если нет галочки в политике перс данных
(function () {
    const modals = Array.from(document.querySelectorAll('.modal'));
    modals.forEach(modal => {
        let button = modal.querySelector('.modal__form-send');
        let checkbox = modal.querySelector('.modal__form-policy').querySelector('input');
        let labelPolicy = modal.querySelector('.modal__form-label-policy');
        let chekPolicy = modal.querySelector('.modal__form-chek-policy');

        if ((button) && (checkbox) && (labelPolicy) && (chekPolicy)) {
            labelPolicy.addEventListener('click', () => { changeButtonState(checkbox, button); });
            chekPolicy.addEventListener('click', () => { changeButtonState(checkbox, button); });
        }
    });

    function changeButtonState(checkbox, button) {
        if (checkbox.checked) {
            button.disabled = 'true';
        } else {
            button.removeAttribute('disabled');
        }
    }
})();

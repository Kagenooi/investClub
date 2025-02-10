export function toggleActive(elem) {
    document.querySelector(`#${elem}`).classList.toggle('active');
}

export function tabs(btn, tabs, btns) {
    let wrapper = document.querySelectorAll(`.${tabs}`);
    wrapper.forEach(element => {
        element.classList.remove('active');
    });
    document.querySelector(`#${btn.dataset.tab}`).classList.add('active');

    let control = document.querySelectorAll(`.${btns}`);
    control.forEach(element => {
        element.classList.remove('active');
    });
    btn.classList.add('active');
}
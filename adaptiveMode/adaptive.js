export function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 19.2 / 100;
    if (document.body.clientWidth > 768 && document.body.clientWidth < 1440) {
        zoom = document.body.clientWidth / 12.8 / 100;
    }
    if (document.body.clientWidth > 480 && document.body.clientWidth < 768) {
        zoom = document.body.clientWidth / 6.4 / 100;
    }
    if (document.body.clientWidth < 480) {
        zoom = document.body.clientWidth / 3.2 / 100;
    }
    wrapper.style.zoom = zoom;

    const wrappers = document.querySelectorAll('.wrapper');
    for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].style.minHeight = `${window.innerHeight / zoom}px`;
    }
}
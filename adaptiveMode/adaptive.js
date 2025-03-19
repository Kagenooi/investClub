export function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 19.2 / 100;
    console.log();
    
    if (document.body.clientWidth > 991 && document.body.clientWidth < (1425 - (window.innerWidth - document.body.clientWidth))) {
        zoom = document.body.clientWidth / 12.8 / 100;
    }
    if (document.body.clientWidth > 576 && document.body.clientWidth < 992) {
        zoom = document.body.clientWidth / 6.4 / 100;
    }
    if (document.body.clientWidth < 577) {
        zoom = document.body.clientWidth / 3.2 / 100;
    }
    wrapper.style.zoom = zoom;

    const wrappers = document.querySelectorAll('.wrapper');
    for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].style.minHeight = `${window.innerHeight / zoom}px`;
    }
}
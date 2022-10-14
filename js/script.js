
document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {

    const select = document.getElementById('select');
    const navList = document.getElementById('nav-list');
    const navListButton = document.getElementById('nav-list-button');

    let options = {
        clikableElem: select,
        classElem: select,
        className: "active"
    };
    toggleSelect( {
        clikableElem: select,
        classElem: select,
        className: "active"
    } );
    toggleSelect({
        clikableElem: navListButton,
        classElem: navList,
        className: "open"
    });

    function toggleSelect(options) {
        options.clikableElem.addEventListener('click', () => {
            options.classElem.classList.toggle(options.className);
        });
    }
}
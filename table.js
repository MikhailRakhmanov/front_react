let isMouseDown = false;
let tableRows = document.querySelectorAll('tr');
function changeColor(e) {
    if (isMouseDown) {
        let cl = e.classList;
        console.log(cl);
        if (cl.contains('checked')) {
            cl.remove('checked');
            for (let i = 0; i < e.children.length; i++) {
                e.children[i].style.color = 'black';
                e.children[i].style.backgroundColor = 'white';
            }
        } else {
            e.classList.add('checked');
            for (let i = 0; i < e.children.length; i++) {
                e.children[i].style.color = '#2C0089';
                e.children[i].style.backgroundColor = '#EEEEEE';
            }
        }
    }
}
tableRows.forEach(e => {
    e.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    e.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    e.addEventListener('mouseenter', changeColor(e));
});
let colapse = document.querySelector('.svg-icon')
let items = document.getElementById('items')

loadEventLis()
function loadEventLis() {
    colapse.addEventListener('click', show_items)
}

function show_items(e) {
    if (e.target.classList.contains('svg-icon')) {
        console.log('hola')
        items.classList.toggle('active')
    }
}
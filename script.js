const array=['matka', 'kigyo', 'vampir', 'csacsi', 'lo', 'szamar']
function init() {
    document.getElementById('body').innerHTML = array.map( v=>
        `<div onclick="f('${v}')">${v}</div>`
    ).join("")
}

function f(a) {
    console.log(a);
}
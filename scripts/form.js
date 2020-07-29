const popup = document.getElementById('popup');
const close = document.getElementById('close');
const submit = document.getElementById('submit');
const open = document.getElementById('open-popup');

open.onclick = () => {
    popup.style.display = 'flex'
}

close.onclick = () => {
    popup.style.display = 'none'
}
submit.onclick = () => {
    popup.style.display = 'none'
}
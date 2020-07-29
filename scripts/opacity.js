
	let rng=document.getElementById('r1');
    let img = document.getElementById('img');
    
rng.oninput = () => {
    img.style.opacity = rng.value;
}

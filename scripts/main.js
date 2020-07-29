let video = document.querySelectorAll('video');

video.forEach((e)=>{
    if(e !== undefined){
        e.play()
        .then(v => v)
        .catch(err => console.log(err))
    }
})

console.log(navigator.userAgent);
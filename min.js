let audio = document.getElementsByTagName('audio')[0];

document.getElementsByTagName("table")[0].addEventListener("click" , function(){
    audio.play()
});

function comingSoon(){
    // alert('coming soon')
    audio.play();
}
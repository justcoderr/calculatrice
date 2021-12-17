let audio = document.getElementsByTagName('audio')[0];
var btn = Array.from(document.getElementsByTagName("td"));
var text = document.getElementsByClassName('text')[0]

btn.map(clikedtn =>{
    clikedtn.addEventListener('click' , (e) =>{
        switch(e.target.innerText){
            case 'on/c':
                this.text.innerText = "0";
                break;
            case '×':
                this.text.innerText += "*";
                break;
            case '÷':
                this.text.innerText += "/";
                break;
            // todo
            case 'off':
                this.text.innerText = this.text.innerText;
                break;
            case '%':
                this.text.innerText = this.text.innerText;
                break;
            case 'tax':
                this.text.innerText = this.text.innerText;
                break;
            case 'm+':
                this.text.innerText = this.text.innerText;
                break;
            case 'm-':
                this.text.innerText = this.text.innerText;
                break; 
            case '+/-':
                this.text.innerText = this.text.innerText;
                break; 
            case 'CE':
                if(text.innerText == "Error!"){
                    text.innerText = "0";
                }
                else{
                    text.innerText = text.innerText.slice(0, -1);
                }
                break
            case '=':
                try{
                    text.innerText= eval(text.innerText);
                }catch{
                    text.innerText= "Error!";
                }
                break;
            default:
                if(this.text.innerText == "0"){
                    if(e.target.innerText == "."){
                        text.innerText = "0.";
                    }
                    else if(e.target.innerText == "0"){
                        text.innerText = "00";
                    }
                    else{
                    text.innerText = e.target.innerText;
                    }
                }
                else if(this.text.innerText == "Error!"){
                    if(e.target.innerText == "."){
                        text.innerText = "0.";
                    }
                    else if(e.target.innerText == "0"){
                        text.innerText = "00";
                    }
                    else{
                    text.innerText = e.target.innerText;
                    }
                }
                else{
                    text.innerText += e.target.innerText;
                }
        }
    })
})
document.getElementsByClassName("off-btn")[0].addEventListener('click', function(){
    document.getElementById("result").style.background = "#292929";
    this.off = true
})
document.getElementsByClassName("on-btn")[0].addEventListener('click', function(){
    document.getElementById("result").style.background = "#c1d92f";
})
document.getElementsByTagName("table")[0].addEventListener("click" , function(){
    audio.play()
});

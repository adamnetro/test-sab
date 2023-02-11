
var box = document.querySelector('.inp-send-mess')

let sab = { 
    S1: ["bitch", "fuke", "fuke you", "fuk", "fuk you", "dk",],
    S2: ["motherf", "mother f",],
    S3: ["wtf",]
    
}


box.addEventListener('input', () => {
    let kalimat = box.value.split(" ")
    for( let i=0; i < kalimat.length; i++){
    if(sab.S1.includes(kalimat[i])){
        let audio = new Audio("وا فشكال هاد بنادم كريزي مان  Moroccan Memes Sound Effects.mp3");
        audio.play()
        box.style.color = "red"
        box.value = `${box.value}` + " : waa chrif 7tarm rask 😠"
        setTimeout( function(){
            box.style.color = "#00ec06"
        },3000)
    }
    
    if(sab.S2.includes(kalimat[i])){
        let audio = new Audio("L2oghnya dial chlo7  Moroccan Memes Sound Effect.mp3");
        audio.play()
        box.style.color = "red"
        box.value = `${box.value}` + " : sf bla matkml rah bayn l3arbon 😂"
        setTimeout( function(){
            box.style.color = "#00ec06"
        },3000)
    }

    if(sab.S3.includes(kalimat[i])){
        let audio = new Audio("Ay.. tzgl wld l97baaa  Moroccan Memes Sound Effect_Trim.mp3");
        audio.play()
        
    }
}
});
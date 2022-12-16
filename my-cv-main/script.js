document.addEventListener("DOMContentLoaded", function () {
    let type = new TypeIt("#typing", {})
    for(let i=1;i<=100;i++){
        type.type('Aku developer').pause(750).delete(13).type('Suka Bermain Game PUBG').pause(750).delete(18)
    }
    type.go()
})

let hamburger = document.getElementById('hamburger-button')
let header = document.getElementById('header')
let main = document.getElementById('main')
let isHidden = 0
hamburger.addEventListener('click',function(){
    if(isHidden == 0){
        header.classList.add('hidden')
        main.classList.add('full-width')
        isHidden = 1
        hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>"
    }else{
        header.classList.remove('hidden')
        main.classList.remove('full-width')
        isHidden = 0
        hamburger.innerHTML = "<i class='fa-solid fa-times'></i>"
    }
})

//scroll function
window.onscroll = function(){
    console.log(main.offsetTop)
    if (document.body.scrollTop > main.offsetTop || document.documentElement.scrollTop > main.offsetTop){
        hamburger.classList.add('active')
    }else{
        hamburger.classList.remove('active')
    }
  
}

// chat ke whatsapp
let whatsappButton = document.getElementById('whatsapp-button')
let message = document.getElementById('message')

message.addEventListener('keydown', function(){
    let pesan = message.value
})
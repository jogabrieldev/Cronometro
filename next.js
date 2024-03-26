
function createTimeSeconds(seconds){
const data = new Date(segundos * 1000)
return data.toLocaleTimeString('pt-br' , {
    hour12: false ,
    timeZone: 'UTC'
})
}

const clock = document.querySelector('.time')
const ini = document.getElementById('start')
const pous = document.getElementById('pause')
const zer = document.querySelector('#reset')

let segundos =  0
let timer = '' 

function iniciaRelogio() {
     timer = setInterval(function() {
        segundos++;
        clock.innerHTML = createTimeSeconds(segundos)   
    } , 1000)
}
 
ini.addEventListener('click' , function(event){
    iniciaRelogio()
    clock.style.color = 'black'
     
})

pous.addEventListener('click' , function(event){
    clearInterval(timer)
    clock.style.color = 'red '
})

zer.addEventListener('click' , function(event){
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
    segundos = 0
    clock.style.color = 'black'
})

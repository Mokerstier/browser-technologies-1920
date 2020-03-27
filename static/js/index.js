const jsWarning = document.getElementById('js-warning')
const submit = document.querySelector('button[type=submit]')
const inputCheck = document.querySelectorAll('fieldset input')
const form = document.querySelector('form')
const fieldset = document.querySelectorAll('fieldset')
const text = document.querySelector('textarea')
const progress = document.querySelector('progress')
const uuid = document.getElementById('uuid')
const koop = document.getElementById('koop')
jsWarning.classList.add('d-none')
const startValue = progress.value

console.log(uuid);
function checkUuid(){
    if(uuid.value){
        return true
    } else return false
   
}

function checkCheckbox(){
    let checked = 0
    
    for(i=0; i < inputCheck.length; i++){
        if(inputCheck[i].checked){
            checked++
        }
    }
    if(checked > 0){
        progress.value = startValue + checked
        return true
    } else return false
}
function showKoop(){
    let pos = 0
    koop.classList.remove(`pos-${pos}`)
    pos = Math.floor(Math.random()*5)
    koop.classList.add(`pos-${pos}`) 
}
showKoop()
function checkText(){
    console.log('backspace werkt!' );
    console.log(text.value.length);
    
    if(text.value.length < 5) return false
    if(text.value.length > 5){
        return true
    } else return false
}
// submit.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log(user)
// })
function checkForm(){
    if (checkText() || checkCheckbox()) {
        submit.classList.add('active')
        submit.removeAttribute('disabled')
    }
    else { 
        submit.classList.remove('active')
        submit.setAttribute('disabled', 'disabled') 
    }
}

window.addEventListener('load', function(event){
    checkForm()

})

form.addEventListener('change', function(event){

  checkForm()
})
text.addEventListener('keyup', function(event){
    checkForm()
})
// form.addEventListener('change', function(event){
//     console.log('executing checkText')
//     checkText()
// })
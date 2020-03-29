const jsWarning = document.getElementById('js-warning')
const submit = document.querySelector('button[type=submit]')
const inputCheck = document.querySelectorAll('fieldset input')
const form = document.querySelector('form')
const fieldset = document.querySelectorAll('fieldset')
const text = document.querySelector('textarea')
const progress = document.querySelector('progress')
const koop = document.getElementById('koop')



jsWarning.classList.add('d-none')
let startValue

!progress ? console.log(false): startValue = progress.value 
console.log(startValue);


function checkCheckbox(){
    let checked = 0
    
    for(i=0; i < inputCheck.length; i++){
        if(inputCheck[i].checked){
            checked++
        }
    }
    if(checked > 0){
        progress.value = startValue + 2
        return true
    } else {
        progress.value = startValue 
        return false
    }
}
function showKoop(){
    let pos = 0
    koop.classList.remove(`pos-${pos}`)
    pos = Math.floor(Math.random()*5)
    koop.classList.add(`pos-${pos}`) 
}
if(koop){
    showKoop()
}

function checkText(){
    
    if(!text) return false
    if(text.value.length > 5){
        return true
    } else return false
}
// submit.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log(user)
// })
function addClass(element, string){
    element.classList.add(string)
}
function deActive(button){
    button.classList.remove('active')
}
function disableButton(button){
    button.setAttribute('disabled', 'disabled') 
}
function enableButton(button){
    button.removeAttribute('disabled')
}
function checkForm(){
    
    if (checkText() || checkCheckbox()) {
        addClass(submit, 'active')
        enableButton(submit)
    }
    else { 
        deActive(submit)
        disableButton(submit)
    }
}

window.addEventListener('load', function(event){
    checkForm()
})

form.addEventListener('change', function(event){
  checkForm()
})


text.addEventListener('keyup', function(event){
    console.log('keyup');
    
    checkForm()
})


// form.addEventListener('change', function(event){
//     console.log('executing checkText')
//     checkText()
// })
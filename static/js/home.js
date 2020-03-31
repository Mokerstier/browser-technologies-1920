const nieuw = document.querySelector('.intro-new #uuid')
const oud = document.querySelector('.intro-old #return-uuid')

const nieuwButton = document.querySelector('.intro-new button')
const oudButton = document.querySelector('.intro-old button')
const fieldsetNew = document.querySelector('.intro-new')
const fieldsetOld = document.querySelector('.intro-old')
const invalid1 = document.querySelector('.intro-new .error-msg')
const invalid2 = document.querySelector('.intro-old .error-msg')
const regex = new RegExp('[0-9]{4}')

if(nieuwButton){
    disableButton(nieuwButton)
    disableButton(oudButton)
}
if(invalid1){
    addClass(invalid1, 'valid')
    addClass(invalid2, 'valid')
}

function checkStudentNumberOld(uuid){
    console.log('testing '+uuid)
    console.log(regex.test(uuid) && uuid.length <5)
    if(regex.test(uuid) && uuid.length <5){
        enableButton(oudButton)
        addClass(oudButton, 'active')
        addClass(invalid2, 'valid')
    } else disableButton(oudButton), removeClass(oudButton, 'active')
}
function checkStudentNumberNew(uuid){
    console.log('testing '+uuid)
    if(regex.test(uuid) && uuid.length <5){
        enableButton(nieuwButton)
        addClass(nieuwButton, 'active')
        addClass(invalid1, 'valid')
    } else disableButton(nieuwButton), removeClass(nieuwButton, 'active')
}

fieldsetOld.addEventListener('keyup', function(event){
    checkStudentNumberOld(oud.value)
    
})
fieldsetNew.addEventListener('keyup', function(event){
    checkStudentNumberNew(nieuw.value)
})
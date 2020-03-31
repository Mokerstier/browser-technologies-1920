const jsWarning = document.getElementById("js-warning");
const main = document.querySelector("main");
const submit = document.querySelector("button[type=submit]");
let inputCheck = document.querySelectorAll("fieldset input");
const form = document.getElementById('enquete');
const fieldsetContainer = document.querySelector(".fieldset-container");
const fieldset = document.querySelectorAll("fieldset");
const fieldsetIntro = document.getElementById("fieldset-intro");
const text = document.querySelector("textarea");
const progress = document.querySelector("progress");
const koop = document.getElementById("koop");
const backButton = document.querySelector(".button-back");
const baseUrl = window.location.origin;

let uuid = document.getElementById("uuid");

if (uuid) {
  uuid = uuid.value;
}
jsWarning.classList.add("d-none");

let currentFieldset = document.querySelector("fieldset");
let fieldsetQ1 = document.getElementById("q1");
let fieldsetQ2 = document.getElementById("q2");
let fieldsetQ3 = document.getElementById("q3");
let fetchStart;
let checkField;
let startValue;

!progress ? console.log(false) : (startValue = progress.value);
if (typeof fetch !== "undefined") {
  getNextQuestion();
  checkForm();
}
function getNextQuestion() {
  console.log(window.location.href);
  if (
    window.location.href !== String(baseUrl) + "/q4" &&
    window.location.href !== String(baseUrl) + "/vraag"
  ) {
    fieldsetContainer.innerHTML = "";
    fetch(baseUrl + "/q1/" + String(uuid))
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // fetch-fieldset
        fieldsetQ1 = doc.getElementById("q1");
        addClass(fieldsetQ1, "fetched");
        addClass(fieldsetQ1, "show");
        checkField = fieldsetQ1;
        fieldsetContainer.appendChild(fieldsetQ1);
        backButton.classList.toggle("hidden");
        console.log("filling container");
      })
      .catch(function(err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });

    fetch(baseUrl + "/q2/" + String(uuid))
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // fetch-fieldset
        fieldsetQ2 = doc.getElementById("q2");
        addClass(fieldsetQ2, "fetched");
        fieldsetContainer.appendChild(fieldsetQ2);
      })
      .catch(function(err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });

    fetch(baseUrl + "/q3/" + String(uuid))
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // fetch-fieldset
        fieldsetQ3 = doc.getElementById("q3");
        addClass(fieldsetQ3, "fetched");

        fieldsetContainer.appendChild(fieldsetQ3);
      })
      .catch(function(err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  } else {
      for(i =0 ; i< fieldset.length; i++){
          fieldset[i].removeAttribute('id')
      }
  }
}

function checkCheckbox(fieldset) {
  if (fieldset) {
    let checked = 0;

    let inputs = fieldset.querySelectorAll("input[type=checkbox]");
    let inputText = fieldset.querySelector("textarea");
    if (inputText) {
      if (inputText.value.length > 5) {
        enableButton(submit);
        
      }
    }
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        addClass(submit, "active");
        inputs[i].setAttribute('value', 'checked')
        enableButton(submit);
        console.log(inputs[i]);
        checked++;
      }
    }
    if (checked > 0) {
        if(progress){
            progress.value = startValue + 2;
        }
      
      return true;
    } else {
        if(progress){
            progress.value = startValue;
        }
      
      removeClass(submit, "active");
      disableButton(submit);
      return false;
    }
  } else {
    let checked = 0;

    for (i = 0; i < inputCheck.length; i++) {
      if (inputCheck[i].checked) {
        inputCheck[i].setAttribute('value', 'checked')
        checked++;
      }
    }
    if (checked > 0) {
        if(progress){
            progress.value = progress.value + 2;
        }
      return true;
    } else {
        if(progress){
            progress.value = progress.value -2
        }
      return false;
    }
  }
}
function showKoop() {
  let pos = 0;
  console.log("pos-" + String(pos));
  koop.classList.remove("pos-" + String(pos));
  pos = Math.floor(Math.random() * 5);
  koop.classList.add("pos-" + String(pos));
}
if (koop) {
  showKoop();
}

function checkText() {
  if (!text) return false;
  if (text.value.length > 5) {
    return true;
  } else return false;
}
let count = 0;

submit.addEventListener("click", function(event) {
  if (
    window.location.href === String(baseUrl) + "/q4" ||
    window.location.href === String(baseUrl) + "/vraag"
  ) {
    return true;
  }
  if (typeof fetch === "undefined") {
    return true;
  } else {
    if (count == 2) {
      form.setAttribute("action", "/q4");
      form.submit()
    }
    event.preventDefault();
    // if(checkText()){
    //     button.classList.add('active')
    // }
    let formData = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})
    
    console.log(formData)
    localStorage.setItem('data', JSON.stringify(formData) )

    switch (count) {
      case 0:
        progress.value = progress.value;
        removeClass(backButton, "hidden");
        removeClass(fieldsetQ1, "show");
        checkField = fieldsetQ2;
        fieldsetQ1.classList.toggle("unshow");
        fieldsetQ2.classList.toggle("show");
        count = count + 1;
        break;

      case 1:
        progress.value = progress.value + 3;
        removeClass(fieldsetQ2, "show");
        checkField = fieldsetQ3;
        fieldsetQ2.classList.toggle("unshow");
        fieldsetQ3.classList.toggle("show");
        count = count + 1;
        console.log(count)
        break;
    }
  }
});

backButton.addEventListener("click", function(event) {
    if(window.location.href === String(baseUrl)+'/q4'){
        return true
    }
  event.preventDefault();

  count = count % 3;
  console.log(count);
  switch (count) {
    case 1:
      removeClass(fieldsetQ2, "show");
      checkField = fieldsetQ1;
      fieldsetQ1.classList.toggle("unshow");
      fieldsetQ1.classList.toggle("show");
      count = count - 1;
      break;
    case 2:
      removeClass(fieldsetQ3, "show");
      checkField = fieldsetQ2;
      fieldsetQ2.classList.toggle("unshow");
      fieldsetQ2.classList.toggle("show");
      count = count - 1;
      break;
  }
});
function addClass(element, string) {
  element.classList.add(string);
}
function removeClass(element, string) {
  element.classList.remove(string);
}
function disableButton(button) {
  button.setAttribute("disabled", "disabled");
}
function enableButton(button) {
  button.removeAttribute("disabled");
}
function checkIntro() {
  if (fieldsetIntro) {
    if (fieldsetIntro.querySelector("input").value) {
      return true;
    }
  }
}
function checkForm() {
  console.log("checkform adsad");
  console.log(checkText())
  if (checkText() || checkCheckbox() || checkIntro()) {
    addClass(submit, "active");
    enableButton(submit);
  } else {
    removeClass(submit, "active");
    disableButton(submit);
  }
}

window.addEventListener("load", function(event) {
  if (form) {
      console.log(fieldsetQ1)
    if (fieldsetQ1) {
      console.log("will check form1");
      checkCheckbox(fieldsetQ1);
    } else {
      checkForm();
    }
  }
});
form.addEventListener("keyup", function(event) {
  if (form) {

    if (checkField) {
      checkCheckbox(checkField);
    } else {
      checkForm();
    }
  }
});
form.addEventListener("change", function(event) {
  if (form) {
    console.log(checkField);
    if (checkField) {
     
      checkCheckbox(checkField);
    } else {
      checkForm();
    }
  }
});

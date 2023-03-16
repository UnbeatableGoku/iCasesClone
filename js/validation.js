let validItem;

// Form Validation
function checkallvalue(event) {
  event.preventDefault();
  validItem = 0;
  let form_element = document.getElementById("form_").elements;
  for (let i = 0; i < form_element.length - 1; i++) {
    if (form_element[i].id == "name_") {
      nameValidation("name_");
    } else if (form_element[i].id == "email_") {
      emailValidation("email_", "emailErr");
    } else if (form_element[i].id == "number_") {
      numberValidation("number_");
    } else if (form_element[i].id == "select_") {
      selectValidation("select_");
    } else if (form_element[i].id == "message_") {
      msgValidation("message_");
    } else {
      console.log("field is not found!!");
    }
  }
  if (validItem == 5) {
    let form = document.getElementById("form_");
    form.style.display = "none";
    let respnce = document.getElementById("feedback-responce");
    respnce.style.display = "inline-block";
    return true;
  } else {
    return false;
  }
}

// Subscribe Email Validation
function checkEmail() {
  validItem = 0;
  emailValidation("email-subs", "subs-warning");
  if (validItem == 1) {
    return true;
  } else {
    // alert("not");
    return false;
  }
}

// Individual Functions
function nameValidation(name) {
  let name_warning = document.getElementById("nameErr");
  let value1 = document.getElementById(name).value;
  if (value1.trim() == "") {
    name_warning.style.display = "block";
    name_warning.innerHTML = "field is empty";
  } else {
    if (!/^[a-zA-Z\s]+$/.test(value1)) {
      name_warning.style.display = "block";
      name_warning.innerHTML = "field is incorrect";
    } else {
      name_warning.style.display = "none";
      validItem++;
    }
  }
}
function emailValidation(email, emailWarning) {
  let name_warning = document.getElementById(emailWarning);
  let value1 = document.getElementById(email).value;
  if (value1.trim() == "") {
    name_warning.style.display = "block";
    name_warning.innerHTML = "field is empty";
  } else {
    if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
        value1
      )
    ) {
      name_warning.style.display = "block";
      name_warning.innerHTML =
        "Email must be in corrent format....(Example: TR0019@krish.xyz )";
    } else {
      name_warning.style.display = "none";
      validItem++;
    }
  }
}
function numberValidation(number) {
  let name_warning = document.getElementById("phoneErr");
  let value1 = document.getElementById(number).value;
  if (value1.trim() == "") {
    name_warning.style.display = "block";
    name_warning.innerHTML = "field is empty";
  } else {
    if (!/^[1-9]{1}[0-9]{9}$/.test(value1)) {
      name_warning.style.display = "block";
      name_warning.innerHTML = "Field is incorrect";
    } else {
      name_warning.style.display = "none";
      validItem++;
    }
  }
}
function selectValidation(select) {
  let name_warning = document.getElementById("subErr");
  let value1 = document.getElementById(select).value;
  if (value1 == "") {
    name_warning.style.display = "block";
    name_warning.innerHTML = "field is empty";
  } else {
    name_warning.style.display = "none";
    validItem++;
  }
}
function msgValidation(message) {
  let name_warning = document.getElementById("msgErr");
  let value1 = document.getElementById(message).value;
  if (value1.trim() == "") {
    name_warning.style.display = "block";
    name_warning.innerHTML = "field is empty";
  } else {
    name_warning.style.display = "none";
    validItem++;
  }
}

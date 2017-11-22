"use strict";
//Shortcuts
const main = document.getElementById("mainData");
const form = document.forms.mainForm;
const elName = form.elements.name;
const elAddress1 = form.elements.address1;
const elAddress2 = form.elements.address2;
const elCity = form.elements.city;
const elState = form.elements.state;
const elZip = form.elements.zip;
const btnOK = form.elements.btnOK;
const btnCancel = form.elements.btnCancel;
const nameError = document.getElementById("nameError");
const address1Error = document.getElementById("address1Error");
const address2Error = document.getElementById("address2Error");
const cityError = document.getElementById("cityError");
const zipError = document.getElementById("zipError");
const stateError = document.getElementById("stateError");

function clearInputs() {
  elName.value = "";
  elAddress1.value = "";
  elAddress2.value = "";
  elCity.value = "";
  elState.value = "";
  elZip.value = "";
}

function validateSelect() {
  if (elState.selectedIndex < 0) {
    stateError.innerHTML = "make your choice";
    stateError.className = "error active";
  } else {
    stateError.className = "invisible";
  }
}

function validateNameInput() {
  if (!elName.validity.valid) {
    nameError.innerHTML = "only Alpha";
    nameError.className = "error active";
  } else {
    nameError.className = "invisible";
  }
}

function validateAddress2Input() {
  if (!elAddress2.validity.valid) {
    address2Error.innerHTML = "only Alphanumeric";
    address2Error.className = "error active";
  } else {
    address2Error.className = "invisible";
  }
}

function validateAddress1Input() {
  if (!elAddress1.validity.valid) {
    address1Error.innerHTML = "only Alphanumeric";
    address1Error.className = "error active";
  } else {
    address1Error.className = "invisible";
  }
}

function validateCityInput() {
  if (!elCity.validity.valid) {
    cityError.innerHTML = "only Alphanumeric";
    cityError.className = "error active";
  } else {
    cityError.className = "invisible";
  }
}

function validateZipInput() {
  if (!elZip.validity.valid) {
    zipError.innerHTML = "only Numeric, length 5";
    zipError.className = "error active";
  } else {
    zipError.className = "invisible";
  }
}

function validateInputs() {
  if (!elName.validity.valid) {
    nameError.innerHTML = "only Alpha";
    nameError.className = "error active";
  } else {
    nameError.className = "invisible";
  }
  if (!elAddress1.validity.valid) {
    address1Error.innerHTML = "only Alphanumeric";
    address1Error.className = "error active";
  } else {
    address1Error.className = "invisible";
  }
  if (!elAddress2.validity.valid) {
    address2Error.innerHTML = "only Alphanumeric";
    address2Error.className = "error active";
  } else {
    address2Error.className = "invisible";
  }
  if (!elCity.validity.valid) {
    cityError.innerHTML = "only Alphanumeric";
    cityError.className = "error active";
  } else {
    cityError.className = "invisible";
  }
  if (!elZip.validity.valid) {
    zipError.innerHTML = "only Numeric";
    zipError.className = "error active";
  } else {
    zipError.className = "invisible";
  }
  if (elState.selectedIndex < 0) {
    stateError.innerHTML = "make your choise";
    stateError.className = "error active";
  } else {
    stateError.className = "invisible";
  }

  if (elName.value.length < 1) fieldRequired(nameError);
  if (elAddress1.value.length < 1) fieldRequired(address1Error);
  if (elCity.value.length < 1) fieldRequired(cityError);
  if (elZip.value.length < 1) fieldRequired(zipError);
}

function fieldRequired(el) {
  el.innerHTML = "field required";
  el.className = "error active";
}

//Handle onchange event
main.onchange = function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;

  switch (target.name) {
    case elState.name:
      validateSelect();
      break;
  }
};

//Handle input event
main.oninput = function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;

  switch (target.name) {
    case elName.name:
      validateNameInput();
      break;
    case elAddress1.name:
      validateAddress1Input();
      break;
    case elAddress2.name:
      validateAddress2Input();
      break;
    case elCity.name:
      validateCityInput();
      break;
    case elZip.name:
      validateZipInput();
      break;
    case btnCancel.name:
      clearInputs();
      break;
  }
};

//Handle click event
main.onclick = function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;

  switch (target.name) {
    case btnOK.name:
      validateInputs();
      break;
    case btnCancel.name:
      clearInputs();
      break;
  }
};

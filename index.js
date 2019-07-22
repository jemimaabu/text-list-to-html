/**
 * Structure:
 * Input list
 * Use different separators for list
 * Convert to:
 * Html list (ordered, unordered)
 * Html select
 * Value options:
 * joined by '-', joined by 'spaces', first word only
 * Optional checkbox:
 * Remove special characters
 */

function getSeperator() {
  var radioButtons = document.querySelector('input[name="separate-by"]:checked').value;
  switch(radioButtons) {
    case "separate-new-lines":
      return /\n/g;
    case "separate-commas":
      return ","
    case "separate-custom":
      return document.getElementById("separate-custom-input").value;
  }
}

function getTag() {
  var radioButtons = document.querySelector('input[name="display-as"]:checked').value;
  switch(radioButtons) {
    case "html-list":
      return "li";
    case "html-select":
      return "option"
    case "html-custom":
      return document.getElementById("custom-tag").value;
  }
}

function getValue() {
  var radioButtons = document.querySelector('input[name="value-format"]:checked').value;
  switch(radioButtons) {
    case "no-value":
      return "none";
    case "first-word":
      return "first"
    case "camel-case":
      return "camel"
    case "join-using":
      return document.getElementById("custom-join").value;
  }
}

function convertList() {
  var textInput = document.getElementById("text-input").value.trim();
  var convertInput = document.getElementById("convert-input");

  var seperator = getSeperator();
  var textArray = textInput.split(seperator);

  textArray = document.getElementById("remove-duplicates").checked ? [...new Set(textArray)] : textArray

  var tag = getTag();

  var value = getValue();

  var convertArray;

  if (value == "none") {
    convertArray = textArray.map(item => `<${tag}>${item.trim()}</${tag}>`);
  } else if (value=="first") {
    convertArray = textArray.map(item => `<${tag} value="${item.trim().toLowerCase().split(" ")[0]}">${item.trim()}</${tag}>`)
  } else if (value=="camel") {
    convertArray = convertArray
  } else {
    convertArray = textArray.map(item => `<${tag} value="${item.trim().toLowerCase().split(" ").join(value)}">${item.trim()}</${tag}>`)
  }
  
  convertInput.value = tag == "option" ? `<select>\n  ${convertArray.join("\n  ")}\n</select>` : convertArray.join("\n")
}
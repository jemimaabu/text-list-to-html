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

function seperateMethod() {
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

function displayAs() {
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

function convertList() {
  var textInput = document.getElementById("text-input").value.trim();
  var convertInput = document.getElementById("convert-input");

  var seperator = seperateMethod();
  var textArray = textInput.split(seperator);

  var tag = displayAs();

	var convertArray = textArray.map(item => `<${tag} value="${item.trim().toLowerCase().split(" ").join("-")}">${item.trim()}</${tag}>`);
  
  convertInput.value = tag == "option" ? `<select>\n  ${convertArray.join("\n  ")}\n</select>` : convertArray.join("\n")
}
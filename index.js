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
function convertList() {
  var textInput = document.getElementById("text-input").value.trim();
  var dropdownInput = document.getElementById("dropdown-input");
  var textArray = textInput.split(/\n/g);

	var optionsArray = textArray.map(function(item) {return `<option value="${item.toLowerCase().split(" ").join("-")}">${item}</option>`});
  
  dropdownInput.value = `<select>\n${optionsArray.join("\n")}</select>`  
}
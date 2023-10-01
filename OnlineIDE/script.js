var htmlAutoCompleted = false;
var cssAutoCompleted = false;
var jsAutoCompleted = false;

function compileCode() {
  var htmlTextarea = document.getElementById("html-code");
  var cssTextarea = document.getElementById("css-code");
  var jsTextarea = document.getElementById("js-code");
  var output = document.getElementById("output").contentWindow.document;

  var htmlCode = htmlTextarea.value;
  var cssCode = cssTextarea.value;
  var jsCode = jsTextarea.value;

  var htmlCursorPos = htmlTextarea.selectionStart;
  var cssCursorPos = cssTextarea.selectionStart;
  var jsCursorPos = jsTextarea.selectionStart;

  if (htmlCode.charAt(htmlCursorPos - 1) === "<" && htmlCode.charAt(htmlCursorPos) !== ">" && !htmlAutoCompleted) {
      var cursorPosition = htmlCursorPos + 1;
      htmlCode = htmlCode.slice(0, cursorPosition) + ">" + htmlCode.slice(cursorPosition);
      cursorPosition++;
      htmlTextarea.selectionStart = cursorPosition;
      htmlTextarea.selectionEnd = cursorPosition;
      htmlAutoCompleted = true;
  }

  if (cssCode.charAt(cssCursorPos - 1) === "{" && cssCode.charAt(cssCursorPos) !== "}" && !cssAutoCompleted) {
      var cursorPosition = cssCursorPos + 1;
      cssCode = cssCode.slice(0, cursorPosition) + "}" + cssCode.slice(cursorPosition);
      cursorPosition++;
      cssTextarea.selectionStart = cursorPosition;
      cssTextarea.selectionEnd = cursorPosition;
      cssAutoCompleted = true;
  }

  if (jsCode.charAt(jsCursorPos - 1) === "{" && jsCode.charAt(jsCursorPos) !== "}" && !jsAutoCompleted) {
      var cursorPosition = jsCursorPos + 1;
      jsCode = jsCode.slice(0, cursorPosition) + "}" + jsCode.slice(cursorPosition);
      cursorPosition++;
      jsTextarea.selectionStart = cursorPosition;
      jsTextarea.selectionEnd = cursorPosition;
      jsAutoCompleted = true;
  }

  htmlTextarea.value = htmlCode;
  cssTextarea.value = cssCode;
  jsTextarea.value = jsCode;

  output.open();
  output.writeln(htmlCode + '<style>' + cssCode + '</style><script>' + jsCode + '</script>');
  output.close();
}

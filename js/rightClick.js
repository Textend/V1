function getSelectedText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

function showContextMenu() {
  document.getElementById("rmenu").className = "show";
  document.getElementById("rmenu").style.top = mouseY(event);
  document.getElementById("rmenu").style.left = mouseX(event);
}

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {

    // alert(getSelectedText());
    showContextMenu();
    e.preventDefault();  
  }, false);
} else {
  document.attachEvent('oncontextmenu', function(){

    // alert(getSelectedText());
    showContextMenu();
    window.event.returnValue = false;
  })
}
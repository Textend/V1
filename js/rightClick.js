function getSelectedText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

var outlineNumber = 0;

function addToOutline() {
  // alert("Adding \"" + getSelectedText() + "\" to outline");
  var outlineText = getSelectedText();
  console.log(outlineText)
  
  insertInOutline(/*new Tuple(outlineNumber++,*/ outlineText);
  // $("#outlineContent").text(outlineText);
  //alert(outlineText);
}


var isMenuShowing = false;

$(document).bind("contextmenu", function(event) {
  event.preventDefault();

  if (!isMenuShowing) {
    $("div.custom-menu").show();
    isMenuShowing = true;
  }

  $("div.custom-menu").css({top: event.pageY + "px", left: event.pageX + "px"});
});

$(document).bind("click", function(event) {
  $("div.custom-menu").hide();
  isMenuShowing = false;
});

$(document).ready(function() {
  $("div.custom-menu").hide();
});

$("#addToOutline").bind("click", function() {
  addToOutline();
});

$(".textention").click(function(e) {
  s = window.getSelection();
  var range = s.getRangeAt(0);
  var node = s.anchorNode;
  while (range.toString().indexOf(' ') != 0) {
    range.setStart(node, (range.startOffset - 1));
  }
  range.setStart(node, range.startOffset + 1);
  do {
    range.setEnd(node, range.endOffset + 1);
  } while (range.toString().indexOf(' ') == -1 && range.toString().trim() != '' && range.endOffset < node.length);
  var str = range.toString().trim();
  alert(str);
});
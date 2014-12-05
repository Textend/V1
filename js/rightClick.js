function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}


function getParentElement() {
    var parentEl = null, sel;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            parentEl = sel.getRangeAt(0).startContainer;
            if (parentEl.nodeType != 1) {
                parentEl = parentEl.parentNode;
            }
        }
    } else if ((sel = document.selection) && sel.type != "Control") {
        parentEl = sel.createRange().startContainer;
        if (parentEl.nodeType != 1) {
            parentEl = parentEl.parentNode;
        }
    }
    return parentEl;
}



function addToOutline() {
    // alert("Adding \"" + getSelectedText() + "\" to outline");
    var outlineText = getSelectedText();
    var parentEl = getParentElement();
    var id = parentEl.id.substring(9);

    console.log(outlineText)
    
    insertInOutline(new Tuple(id, outlineText));
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
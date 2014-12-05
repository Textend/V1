var numLines = 0;

var openText = function() {

    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        // Entire file
        console.log(this.result);
        // document.getElementById("openedfile").innerHTML = this.result;

        var outHTML = "";
        var lines = this.result.split('\r');

        numLines = lines.length;

        var select = document.getElementById("fontSizeSelect");
        var fontSize = select.options[select.selectedIndex].value;
        var fontWeight = fontSize / 15.0;

        $("*.bookTitle").text("");
        $("*.bookAuthor").text("");

        for (var line = 0; line < lines.length; line++) {
            var cLine = lines[line];
            if (cLine.trim().substring(0, 7) === "@Title:") {
                $("*.bookTitle").text(cLine.trim().substring(7).trim());
            } else if (cLine.trim().substring(0, 8) === "@Author:") {
                $("*.bookAuthor").text("by " + cLine.trim().substring(8).trim());
            } else if (cLine.trim().substring(0, 9) === "@Section:") {
                outHTML += "<p class=textention-section id=\"textline_" + line + "\" style=\"font-size: " + (1.25 * fontWeight) + "em\">" 
                        + cLine.trim().substring(9).trim() + "</p>";
            } else if (cLine.trim() !== "") {
                outHTML += "<p class=textention id=\"textline_" + line + "\" style=\"font-size: " + fontWeight + "em\">" + lines[line] + "</p>";
            } else {
                outHTML += "<br/>";
            }
            // var newLineOfText = document.createTextNode(lines[line] + "\n\n");
            // console.log(lines[line]);
        }

        document.getElementById("doc").innerHTML = outHTML;
    };
    reader.readAsText(file);
};

document.getElementById('file').onchange = openText;
// document.getElementById('openfile').onclick = alert('click');



$("#saveSettingsBtn").bind("click", function() {
    var select = document.getElementById("fontSizeSelect");
    var fontSize = select.options[select.selectedIndex].value;

    var fontWeight = fontSize / 15.0;

    $("#outlineList").children().css("font-size", fontWeight + "em");

    $(".bookTitle").css("font-size", (fontWeight * 1.5) + "em");
    $(".bookAuthor").css("font-size", (fontWeight * 1.5) + "em");

    $(".textention").css("font-size", fontWeight + "em");
    $(".textention-section").css("font-size", (1.25 * fontWeight) + "em"); 
});

var openText = function() {
    var file = document.getElementById("fileSelect").files[0];
    // alert(file.name);

    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        // Entire file
        console.log(this.result);
        // document.getElementById("openedfile").innerHTML = this.result;

        var outHTML = "";
        var lines = this.result.split('\n');

        for (var line = 0; line < lines.length; line++) {
            outHTML += "<p class=textention id=\"textline" + line + "\">" + lines[line] + "</p>";
            // var newLineOfText = document.createTextNode(lines[line] + "\n\n");
            // console.log(lines[line]);
        }

        document.getElementById("doc").innerHTML = outHTML;
    };
    reader.readAsText(file);
};

// document.getElementById('file').onchange = openText;
// document.getElementById('openfilebtn').onclick = openText;

$("#openfilebtn").bind("click", function() {
    openText();
    $("#doc").show();
    // openDocument();
});

// document.getElementById('openfile').onclick = alert('click');

 var openText = function() {

     var file = this.files[0];

     var reader = new FileReader();
     reader.onload = function(progressEvent) {
         // Entire file
         console.log(this.result);
         document.getElementById("openedfile").innerHTML = this.result;

         var lines = this.result.split('\n');

         for (var line = 0; line < lines.length; line++) {
             var newLineOfText = document.createTextNode(lines[line] + "\n\n");
             console.log(lines[line]);
         }


     };
     reader.readAsText(file);
 };

 document.getElementById('file').onchange = openText;
 // document.getElementById('openfile').onclick = alert('click');

 var openText = function() {

     var file = this.files[0];
     var doc = [];

     var reader = new FileReader();
     reader.onload = function(progressEvent) {
         // Entire file
         console.log(this.result);
         // = this.result;
         // By lines
         var newPara = document.createElement("p");
         
         var lines = this.result.split('\n');

         for (var line = 0; line < lines.length; line++) {
             var newLineOfText = document.createTextNode(lines[line] + "\n\n");\

             newPara.appendChild(newLineOfText);
             doc.append(newPara);
             console.log(lines[line]);
         }


     };
     reader.readAsText(file);
 };

 document.getElementById('file').onchange = openText;
 // document.getElementById('openfile').onclick = alert('click');

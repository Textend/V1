 
var openText = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);
     // = this.result;
    // By lines
    var newPara = document.createElement("p");
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      var newLineOfText = document.createTextNode(lines[line] + "\n\n");
      document.getElementById("textention").appendChild(newLineOfText);
      console.log(lines[line]);
    }


  };
  hideInputPanel();
  reader.readAsText(file);
};
document.getElementById('file').onchange = openText;
// document.getElementById('openfile').onclick = alert('click');

$(function () {
  $('#openfile').click(open);
})

function hideInputPanel(){
  $('inputpanel').hide()
}
function open(){
  openText();
  alert('open')
}


var openText = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);
    document.getElementById("textention").innerHTML = this.result;
    // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};
document.getElementById('file').onchange = openText;
// document.getElementById('openfile').onclick = alert('click');

$(function () {
  $('#openfile').click(open);
})

function open(){
  openText();
  alert('open')
}

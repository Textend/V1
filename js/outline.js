function Tuple(position, content) {
  this.position = position;
  this.content = content;
}

var outline = [];

function clearOutline() {
  outline = [];
}

function insertInOutline(tuple) {
  outline.push(tuple);
  /*
  if (arr.length === 0) {
    outline.push(tuple);
  } else {
    for (var i = 0; i < outline.length; i++) {
      if (tuple.position > arr[i].position) {
        outline.splice(i, 0, tuple);
        return;
      }
    }
    outline.push(tuple);
  }
  */
}
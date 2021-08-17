// display in html from database //
let $ = jQuery
$.ajax ({
  type: 'GET',
  url: 'http://localhost:8080/meows',
  success: function(data) {
    for (var i = 0; i < data.length; i++) {
      document
        .getElementById('display')
        .append(document.createTextNode(data[i].content));
    }
  }
})

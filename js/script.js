
// paw button function //
function pawupload() {
// NAME upload //
  var name =
    document.getElementById('name').value;
    var welcome = "<h3>Hi " + name.toUpperCase() + ", meowcome!</h3>";

  // Say Hello to User //
  document
    .getElementById('hello')
    .innerHTML = welcome;


// Meowsage upload //
  var meowsage =
    document.getElementById('new-meows').value;
// display recent meowsage //
    document
      .getElementById('new-display')
      .innerHTML = meowsage;

}

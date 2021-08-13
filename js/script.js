console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

// NAME upload //
function pawupload() {
  var name =
    document.getElementById('name').value;
    var welcome = "<h3>Hi " + name.toUpperCase() + ", meowcome!</h3>";

  // document
  //   .getElementById('content')
  //   .textContent = message;
  document
    .getElementById('content')
    .innerHTML = welcome;


// Meowsage upload //
  var meowsage =
    document.getElementById('new-meows').value;

    document
      .getElementById('content2')
      .innerHTML = meowsage;

  console.log(document.getElementById("name").value);

  }

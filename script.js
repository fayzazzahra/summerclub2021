function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById('demo').innerHTML = txt;
  }


  // <script>
  // let name = prompt("What's your name?")
  // alert("Hello, " + name + "!");
  // </script>
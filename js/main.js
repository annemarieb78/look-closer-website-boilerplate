/*signup uptop form*/
function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/viXsgKp9LABNAE2N/",
    type: "post",
    data: $("#myForm-uptop").serializeArray(),
    // success: function () {
    //   alert("You've been added to our mailing list! :)");
    // },
    // error: function () {
    //   alert("There was an error :(");
    // },
  });
}

/*signup form*/
function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/viXsgKp9LABNAE2N/",
    type: "post",
    data: $("#myForm").serializeArray(),
    // success: function () {
    //   alert("You've been added to our mailing list! :)");
    // },
    // error: function () {
    //   alert("There was an error :(");
    // },
  });
}

/*Clear Form*/
let output = document.getElementById("output");
function clearText(event) {
  // access input field
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");
  // clear the input field.
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  output.innerHTML += "Form submitted successfully! <br>";
}

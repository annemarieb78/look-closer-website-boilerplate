// /*Carousel*/
// let container = document.getElementById("container");
// let imgs_containers = document.getElementsByClassName("img_container");
// let imgs_count = imgs_containers.length;
// let current_img_index = 0;
// let autoScroll_enabled = false;
// let autoScroll_interval = 3000;
// let autoScroll_dir = 1;

// function setup() {
//   let container_width = container.clientWidth;
//   for (let i = 0; i < imgs_count; i++) {
//     let element = imgs_containers[i];
//     let new_left_pos = container_width * i;
//     element.style.left = new_left_pos + "px";
//   }
// }

// function onLeftButton() {
//   if (current_img_index > 0) {
//     let container_width = container.clientWidth;
//     current_img_index--;
//     for (let i = 0; i < imgs_count; i++) {
//       let element = imgs_containers[i];
//       let new_left_pos = container_width * (i - current_img_index);
//       element.style.left = new_left_pos + "px";
//     }
//   }
// }
// function onRightButton() {
//   if (current_img_index < imgs_count - 1) {
//     let container_width = container.clientWidth;
//     current_img_index++;
//     for (let i = 0; i < imgs_count; i++) {
//       let element = imgs_containers[i];
//       let new_left_pos = -container_width * (current_img_index - i);
//       element.style.left = new_left_pos + "px";
//     }
//   }
// }

// function autoScroll() {
//   if (!autoScroll_enabled) return;
//   if (current_img_index == 0) autoScroll_dir = 1;
//   else if (current_img_index == imgs_count - 1) autoScroll_dir = -1;
//   if (autoScroll_dir < 0) {
//     let container_width = container.clientWidth;
//     current_img_index--;
//     for (let i = 0; i < imgs_count; i++) {
//       let element = imgs_containers[i];
//       let new_left_pos = container_width * (i - current_img_index);
//       element.style.left = new_left_pos + "px";
//     }
//   } else {
//     let container_width = container.clientWidth;
//     current_img_index++;
//     for (let i = 0; i < imgs_count; i++) {
//       let element = imgs_containers[i];
//       let new_left_pos = -container_width * (current_img_index - i);
//       element.style.left = new_left_pos + "px";
//     }
//   }
// }
// setup();
// setInterval(autoScroll, autoScroll_interval);

/*signup uptop form*/
function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/viXsgKp9LABNAE2N/",
    type: "post",
    data: $("#myForm-uptop").serializeArray(),
    // success: function () {
    //   alert("Form Data Submitted :)");
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
    //   alert("Form Data Submitted :)");
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
  // output.innerHTML += "Form submitted successfully! <br>";
}

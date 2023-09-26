/*Carousel*/
let container = document.getElementById("container");
let imgs_containers = document.getElementsByClassName("img_container");
let imgs_count = imgs_containers.length;
let current_img_index = 0;
let autoScroll_enabled = false;
let autoScroll_interval = 3000;
let autoScroll_dir = 1;

function setup() {
  let container_width = container.clientWidth;
  for (let i = 0; i < imgs_count; i++) {
    let element = imgs_containers[i];
    let new_left_pos = container_width * i;
    element.style.left = new_left_pos + "px";
  }
}

function onLeftButton() {
  if (current_img_index > 0) {
    let container_width = container.clientWidth;
    current_img_index--;
    for (let i = 0; i < imgs_count; i++) {
      let element = imgs_containers[i];
      let new_left_pos = container_width * (i - current_img_index);
      element.style.left = new_left_pos + "px";
    }
  }
}
function onRightButton() {
  if (current_img_index < imgs_count - 1) {
    let container_width = container.clientWidth;
    current_img_index++;
    for (let i = 0; i < imgs_count; i++) {
      let element = imgs_containers[i];
      let new_left_pos = -container_width * (current_img_index - i);
      element.style.left = new_left_pos + "px";
    }
  }
}

function autoScroll() {
  if (!autoScroll_enabled) return;
  if (current_img_index == 0) autoScroll_dir = 1;
  else if (current_img_index == imgs_count - 1) autoScroll_dir = -1;
  if (autoScroll_dir < 0) {
    let container_width = container.clientWidth;
    current_img_index--;
    for (let i = 0; i < imgs_count; i++) {
      let element = imgs_containers[i];
      let new_left_pos = container_width * (i - current_img_index);
      element.style.left = new_left_pos + "px";
    }
  } else {
    let container_width = container.clientWidth;
    current_img_index++;
    for (let i = 0; i < imgs_count; i++) {
      let element = imgs_containers[i];
      let new_left_pos = -container_width * (current_img_index - i);
      element.style.left = new_left_pos + "px";
    }
  }
}
setup();
setInterval(autoScroll, autoScroll_interval);

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

function clearForm() {
  document.getElementByName("name").value = "";
  document.getElementByName("email").value = "";
}

// const image_input = document.querySelector('#image_input');
// var uploaded_image = "";

// image_input .addEventListener("change", function() {
//    const reader = new FileReader();
//    reader.addEventListener("load",  function () {
//            uploaded_image = reader.result;
//            document.querySelector("#display_image").style.backgroundImage; `url(${uploaded_image})`;
//        });
//     reader.readAsDataURL(this.files[0]);
// })



const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", function() {
  const file_reader = new FileReader();
  file_reader.addEventListener("load", () => {
    const uploaded_image = file_reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  file_reader.readAsDataURL(this.files[0]);
});
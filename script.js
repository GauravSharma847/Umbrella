const image_input = document.querySelector("#file");

image_input.addEventListener("change", function() {
  const file_reader = new FileReader();
  file_reader.addEventListener("load", () => {
    const uploaded_image = file_reader.result;
    document.querySelector("#display_logo").style.backgroundImage = `url(${uploaded_image})`;
  });
  file_reader.readAsDataURL(this.files[0]);
});


const img = document.getElementById('myImg');

let currentImgIdx = 1;
const images = [ 
    '/pinkumbrella.png',
    '/yellowumbrella.png',
    '/blueumbrella.png'
];

const loaderimg = '/loader_icon.svg'

// function changeImage(){
//     if(currentImgIdx >= images.length){
//         currentImgIdx = 0;
//         // If current idx exceeds images array
//         // length, reset it to 0 again
//     }
//     img.src = images[currentImgIdx];
//     currentImgIdx++;
//     // Increment current image idx by 1
// }




let btnpink = document.querySelector('#btnpink');
let btnblue = document.querySelector('#btnblue');
let btnyellow = document.querySelector('#btnyellow');
let uploadbtn = document.querySelector("#uploadbtn")

btnpink.addEventListener('click',() =>uploadbtn.style.backgroundColor = "rgb(244, 22, 111)");
btnyellow.addEventListener('click',() =>uploadbtn.style.backgroundColor = "yellow");
btnblue.addEventListener('click',() =>uploadbtn.style.backgroundColor = "blue");

let containercolor = document.querySelector("#contcolor");
// rgb(241, 199, 206)
btnpink.addEventListener('click', () => containercolor.style.backgroundColor = "pink")
btnyellow.addEventListener('click', () => containercolor.style.backgroundColor = "rgb(246, 246, 163)")
btnblue.addEventListener('click', () => containercolor.style.backgroundColor = "lightblue")

function changeImageBlue(){

    const umbImg = document.querySelector("#myImg");
    const logoImg = document.querySelector("#loadimage");
    if(umbImg.length > 0){
        umbImg.remove();
        logoImg.remove();
    }
    
    //  img.src = loaderimg;  
     img.src = "";  
     img.style.fill = "rgb(244, 22, 111)";
    let currentImgIdx = 2;
    setTimeout (function() {
        img.src=images[currentImgIdx] ;
    },2000);
}

function changeImagePink(){
    const umbImg = document.querySelector("#myImg");
    const logoImg = document.querySelector("#loadimage");
    if(umbImg.length > 0){
        umbImg.remove();
        logoImg.remove();
    }
    
    // img.src = loaderimg;
    img.src = "";
    let currentImgIdx = 0;
    setTimeout (function() {
        img.src=images[currentImgIdx] ;
    },2000);
}
function changeImageYellow(){
    const umbImg = document.querySelector("#myImg");
    const logoImg = document.querySelector("#loadimage");
    if(umbImg.length > 0){
        umbImg.remove();
        logoImg.remove();
    }
    let currentImgIdx = 1;
    img.src = "";
    setTimeout (function() {
        img.src=images[currentImgIdx] ;
    },2000);
}


{/* <img src="loader_icon.svg" alt=""> */}

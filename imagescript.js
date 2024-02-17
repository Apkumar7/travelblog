/*
  This is JavaScript code - to do dynamic stuff on webpages
*/
//To debug this script : ( Incase I  forget at a later date
// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

// Get handles for button elements
const button_back = document.getElementById("btn1");
const button_fwd = document.getElementById("btn2");
document.getElementById("title").addEventListener("load", hidediv);
document.getElementById("changing_img").addEventListener("mouseenter", imghoverin);
document.getElementById("picbox1i").addEventListener("mouseenter", imghoverin);
document.getElementById("btn2").addEventListener("mouseenter", btnhover);
document.getElementById("btn2").addEventListener("mouseleave", btnhovero);
document.getElementById("btn1").addEventListener("mouseenter", btnhover);
document.getElementById("btn1").addEventListener("mouseleave", btnhovero);



if (button_back) {
  console.log("found back buttom");
  console.log(button_back);
}
const rajastan_pics = [
  /*"https://cdn.glitch.global/bd5a723f-9505-48e6-b662-43bf001a6a8b/IMG_6468.JPG?v=1705859573388",*/
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/8E8E0DE5-ADEC-4CDE-A013-B6DA0047DDC4.jpeg?v=1705807653632",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/fortpic.jpg?v=1705881239260",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/transparent.jpg?v=1705882352573",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/bluecity.jpg?v=1705882767436",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/transparent2.jpg?v=1705883186834",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/tower.jpg?v=1705883694844",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/stepwell.jpg?v=1705883714452",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/monkey.jpg?v=1705883730160",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9707.jpeg?v=1705971633278",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9706.jpeg?v=1705971640448",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9604.jpeg?v=1705971648513",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9529.jpeg?v=1705971653630",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9514.jpeg?v=1705971658963",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9501.jpeg?v=1705971664387",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9473.jpeg?v=1705971670276",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8584.jpeg?v=1705971690868",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8354.jpeg?v=1705971724611",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/FullSizeRender.jpeg?v=1705971733089",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8078.jpeg?v=1705971742815",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8017.jpeg?v=1705971748362",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_7703.jpeg?v=1705971762619",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9972.jpeg?v=1705971768750",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8416.jpeg?v=1705971778576",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9956.jpeg?v=1705971783237",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8801.jpeg?v=1705971791785",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9704.jpeg?v=1705971798320",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8160.jpeg?v=1705971813954",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8570.jpeg?v=1705971696402",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_7814.jpeg?v=1705971757899",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8555%20(1).jpg?v=1706485209682",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8297.jpg?v=1706485214868",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8537%20(1).jpg?v=1706485224369",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9393.jpg?v=1706486903382",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9441.jpg?v=1706486906423",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_8227.jpg?v=1706486909115",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9100.jpg?v=1706486912776",
  "https://cdn.glitch.global/85885e75-f9b6-4fb4-a31a-9ee2637c521a/IMG_9926.jpg?v=1706486915651"
];

const rajastan_title = [
  /*" peacock",*/
  "Gadisar Lake",
  "Mehranghar Fort View From The Base",
  "Jaswanth Thada",
  "Blue City Mural",
  "Translucent Makhrana Marble",
  "Ghanta Ghar or Clock tower, Jodhpur",
  "Stepwell: Thoorji Ka Jhalra",
  "Mangrove Garden",
  "Intricate Stone Carvings On A Haveli",
  "Mehrangar Queen's Palace",
  "Mehrangar Palace",
  "View Of Blue City From The Palace",
  "Guard's View From Highest Point In The Palace",
  "Mehranghar Palace View",
  "Queen's Courtyard view",
  "Cenotaph- King's Memorial; Taken @ Twilight",
  "Jain temple",
  "Carvings Inside 1200 Years Old Jain Temple",
  "Rajastani Puppets",
  "Stone window",
  "Antique Lock",
  "Cow Bells",
  "Traditional Wooden dolls",
  "Bride and Groom Dolls",
  "Stone Door Entrance To The Temple",
  "Rajastani Gentleman in Traditional Dress",
  "Aerial View of Mehranghar Fort",
  "Cenotaphs @ Dawn",
  "Patwoan Ki Haveli",
  "Haveli Ceilings",
  "",
  "Doors(Pol) of Rajastan", 
  "Elephant",
  "Golden Palaquin",
  "Rajastani Turban (Male head dress)",
  "Desert Camp",
  "Langur Resting"
];
var current_len = 0;
var picclass = [];
function print_array(value, index, name) {
  console.log("value of array at " + index + "is " + value);
}
function btn1click() {
  console.log("button pressed");
  console.log(current_len);
  current_len = current_len - 1;
  /*document.getElementById("pbtn1").innerHTML="Back button pressed";*/
  if ((current_len < 0) | (current_len >= rajastan_pics.length)) {
    current_len = rajastan_pics.length - 1;}
  document.getElementById("changing_img").src = rajastan_pics[current_len];
  var pichead = document.getElementById("pich");
  document.getElementById("pich").innerHTML = rajastan_title[current_len];
  /*if (current_len < 0) {
    current_len = rajastan_pics.length - 1;*/
  }

function btn2click() {
  console.log("button pressed");
  console.log(current_len);
  current_len = current_len + 1;
  /*document.getElementById("pbtn2").innerHTML="fwd button pressed";*/
  if ((current_len >= rajastan_pics.length) | (current_len < 0)) {
    current_len = 0;
      }
  document.getElementById("changing_img").src = rajastan_pics[current_len];
  var pichead = document.getElementById("pich");
  document.getElementById("pich").innerHTML = rajastan_title[current_len];
  /*if (current_len >= rajastan_pics.length) {
    current_len = 0;*/
  }
/*setTimeout(disappear(){
  document.getElementById("title").classList.add('hidden')
}, 5000);*/
function btnhover(event) {
  console.log("btn2hvr");
  this.style.color = "#111111";
}

function btnhovero() {
  console.log("btn1hvr");
  this.style.color = "#eeeeee";
}
function hide(){
  document.getElementById("title").style.display = "none";  
}

function hidediv() {
  setTimeout(hide,2000);
}

function imghoverin(){
  console.log("hovering in over image");
  /*var elements = document.getElementsByClassName('pcontent two');
  for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#abcdef";*/
  document.getElementById("title").style.display = "none";
}
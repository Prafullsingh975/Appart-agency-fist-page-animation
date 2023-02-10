var effect = document.querySelector("#effect");
var circle1 = document.querySelector("#c1");
var circle2 = document.querySelector("#c2");
var circle3 = document.querySelector("#c3");
var circle4 = document.querySelector("#c4");
// console.log("connected");
effect.addEventListener("mouseenter",move());
var fullWidth = effect.getBoundingClientRect().width;
var fullHeight = effect.getBoundingClientRect().height;

function move(params) {
    effect.addEventListener("mousemove",function(details){
    circle1.style.transform = `translate(${(details.x-(fullWidth/2))/(fullWidth/100)}%,${-((fullHeight/2)-(details.y-35))/(fullHeight/100)}%)`;
    circle2.style.transform = `translate(${-(details.x-(fullWidth/2))/(fullWidth/100)}%,${((fullHeight/2)-(details.y-35))/(fullHeight/100)}%)`;
    circle3.style.transform = `translate(${(details.x-(fullWidth/2))/(fullWidth/100)}%,${((fullHeight/2)-(details.y-35))/(fullHeight/100)}%)`;
    circle4.style.transform = `translate(${-(details.x-(fullWidth/2))/(fullWidth/100)}%,${-((fullHeight/2)-(details.y-35))/(fullHeight/100)}%)`;
    console.log(((fullHeight/2)-(details.y-35))/(fullHeight/100))
    })
}
// var elements = document.getElementsByClassName("element");
// var radiusRange = document.getElementById("radiusRange");

// function changeBorderRadius(radius) {
//     for(var i=0; i<elements.length; i++) {
//         elements[i].style.borderRadius = (radius / 100) + 'rem';
//     }
// }

// radiusRange.addEventListener("change", function(){
//     var radius = this.value;
//     changeBorderRadius(radius);
// });

var elements = document.getElementsByClassName("element");
var radiusRange = document.getElementById("radiusRange");

var radii = ["0", "0.25rem", "0.5rem", "0.75rem", "9999px"];

function changeBorderRadius(radius) {
    for(var i=0; i<elements.length; i++) {
        elements[i].style.borderRadius = radii[radius];
    }
}

radiusRange.addEventListener("change", function(){
    var radius = this.value;
    changeBorderRadius(radius);
});
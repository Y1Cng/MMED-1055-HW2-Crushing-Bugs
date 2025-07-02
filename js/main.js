console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

// function drop(event) {
//     event.preventDefault();
//     this.appendChild(currentDraggedElement);
//     currentDraggedElement = null;
// }

function drop(event) {
    event.preventDefault();
    // Check if the drop zone already has a label
    if (this.querySelector('.label')) {
        return; // Exit if there's already a label
    }
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});

console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

const resetBtn = document.getElementById('reset-btn');
const labelBox = document.getElementById('label-box');

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function resetGame() {
    // Get all labels, including those in drop zones
    const allLabels = document.querySelectorAll('.label');
    allLabels.forEach(label => {
        labelBox.appendChild(label);
    });
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

resetBtn.addEventListener('click', resetGame);
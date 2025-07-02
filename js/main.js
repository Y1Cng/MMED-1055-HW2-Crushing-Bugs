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
    if (this.querySelector('.label')) {
        this.style.backgroundColor = 'rgba(200, 200, 200, 0.2)';
        this.style.border = '2px dashed rgba(80, 206, 22, 0.6)';
        return;
    }
    this.appendChild(currentDraggedElement);
    this.style.backgroundColor = 'rgba(200, 200, 200, 0.2)';
    this.style.border = '2px dashed rgba(80, 206, 22, 0.6)';
    currentDraggedElement = null;
}

function dragEnter() {
    this.style.backgroundColor = 'rgba(80, 206, 22, 0.3)';
    this.style.border = '2px dashed rgba(80, 206, 22, 0.8)';
}

function dragLeave() {
    this.style.backgroundColor = 'rgba(200, 200, 200, 0.2)';
    this.style.border = '2px dashed rgba(80, 206, 22, 0.6)';
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener('dragover', dragOver);
    target.addEventListener('drop', drop);
    target.addEventListener('dragenter', dragEnter);
    target.addEventListener('dragleave', dragLeave);
});

resetBtn.addEventListener('click', resetGame);

// ----------------------------------------------------------------------------

// Dragging

// var mousePosition;
// var offset = [0,0];
// var vscode;
// var isDown = false;

// vscode = document.getElementById("vs");
// vstop = document.getElementById("vstop");


// vstop.addEventListener('mousedown', function(e) {
//     isDown = true;
//     offset = [
//         vscode.offsetLeft - e.clientX,
//         vscode.offsetTop - e.clientY
//     ];
// }, true);

// document.addEventListener('mouseup', function() {
//     isDown = false;
// }, true);

// document.addEventListener('mousemove', function(event) {
//     event.preventDefault();
//     if (isDown) {
//         mousePosition = {

//             x : event.clientX,
//             y : event.clientY

//         };
//         vscode.style.left = (mousePosition.x + offset[0]) + 'px';
//         vscode.style.top  = (mousePosition.y + offset[1]) + 'px';
//     }
// }, true);

// ------------------------------------------------------------------------------
canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    console.log(color);
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("X = " + mouseX + ", Y = " + mouseY);
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();
}
function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}
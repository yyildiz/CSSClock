var canvas = document.getElementById('inner-glaze-top');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 150;
var startAngle = 1.37 * Math.PI;
var endAngle = 1.8 * Math.PI;
var startAngleSecond = 1.23 * Math.PI;
var endAngleSecond = 1.30 * Math.PI;
var counterClockwise = false;

context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 10;
context.strokeStyle = '#F09B9F';
context.stroke();

context.beginPath();
context.arc(x, y, radius, startAngleSecond, endAngleSecond, counterClockwise);
context.stroke();
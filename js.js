var CANVAS_WIDTH = 300;
var RADIUS = CANVAS_WIDTH*0.4;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

window.onload=function(){	
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_WIDTH;
	setInterval("initClock()",100);
}
function initClock(){
	drawBg();
	drawTime();
}
function drawTime(){
	var datedata = new Date();
	var hour = datedata.getHours();
	var minute = datedata.getMinutes();
	var second = datedata.getSeconds();
	var week = datedata.getDay();
	$("#year").text(datedata.getFullYear());
	$("#month").text(datedata.getMonth()+1);
	$("#day").text(datedata.getDate());
	$("#hour").text(hour);
	$("#minute").text(minute);
	$("#second").text(second);
	$("#week").text(weekday[week]);

	context.translate(CANVAS_WIDTH/2,CANVAS_WIDTH/2);
	drawHour(hour,minute);
	drawMinute(minute);
	drawSecond(second);
	context.translate(-CANVAS_WIDTH/2,-CANVAS_WIDTH/2);
}
function drawSecond(Second){
	context.save();
	context.beginPath();
	context.rotate(Math.PI*(Second/30-0.5));
	context.moveTo(-5,2);
	context.lineTo(0.3*CANVAS_WIDTH,1);
	context.lineTo(0.3*CANVAS_WIDTH,-1);
	context.lineTo(-5,-2);
	context.closePath();
	context.fillStyle = "#ff0000";
	context.fill();
	context.restore();
}
function drawMinute(minute){
	context.save();
	context.beginPath();
	context.rotate(Math.PI*(minute/30-0.5));
	context.moveTo(-5,2);
	context.lineTo(0.23*CANVAS_WIDTH,1);
	context.lineTo(0.23*CANVAS_WIDTH,-1);
	context.lineTo(-5,-2);
	context.closePath();
	context.fillStyle = "#000";
	context.fill();
	context.restore();
}
function drawHour(hour,minute){
	context.save();
	context.beginPath();
	context.rotate(Math.PI*(minute/60+hour-3)/6);
	context.moveTo(-5,2);
	context.lineTo(0.18*CANVAS_WIDTH,1);
	context.lineTo(0.18*CANVAS_WIDTH,-1);
	context.lineTo(-5,-2);
	context.closePath();
	context.fillStyle = "#000";
	context.fill();
	context.restore();
}
function drawBg(){
	context.save();
	context.clearRect(0,0,CANVAS_WIDTH,CANVAS_WIDTH);
	context.translate(CANVAS_WIDTH/2,CANVAS_WIDTH/2);
	context.beginPath();
	context.arc(0,0,0.4*CANVAS_WIDTH,0,2*Math.PI);
	context.lineWidth = CANVAS_WIDTH/40;
	context.stroke();

	var numRadius = CANVAS_WIDTH*0.3;
	var clockNum = [3,4,5,6,7,8,9,10,11,12,1,2];
	context.font = CANVAS_WIDTH/20+"px bold arial";
	context.textBaseline = 'middle';
	context.textAlign = 'center';
	for(var i=0;i<clockNum.length;i++){
		context.fillText(clockNum[i],numRadius*Math.cos(Math.PI*i/6),numRadius*Math.sin(Math.PI*i/6))
	}

	var pointRadius = CANVAS_WIDTH*0.35;

	for(var j=0;j<60;j++){	
		context.beginPath()
		context.arc(pointRadius*Math.cos(Math.PI*j/30),pointRadius*Math.sin(Math.PI*j/30),CANVAS_WIDTH/100,0,2*Math.PI);
		if(j%5==0){
			context.fillStyle = "#000";
		}else{
			context.fillStyle = "#aaa";
		}
		context.fill();
	}
	context.restore();
}

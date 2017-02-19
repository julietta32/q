var elementNewA;
var second;

var elem3;
var first = document.querySelector('.stop a');



function handler(){
var elem = document.querySelector('.main');
     elem.remove();

	
	
var elementNew = document.createElement('a');
elementNew.classList.add('green');
elementNew.style.fontSize = "28px";
elementNew.style.color = "white";
elementNew.style.textDecoration = "none";
elementNew.href="#";
elementNew.innerHTML =  '<img src="img/l.png">Back';
	
	
var elem2 = document.querySelector('.bottom');
elem2.appendChild(elementNew);

elem3 = document.createElement('div');
 elem3.classList.add('timer');	
 elem3.style.height = "400px";
 elem3.style.width = "900px";
	var top = document.querySelector ('.top');
top.parentNode.insertBefore(elem3, top.nextSibling);

	var clock = document.createElement('div');
clock.classList.add('clock');
clock.style.height ="150px";
clock.style.width = "600px";
clock.style.borderRadius ="20px";
clock.style.border = "9px solid black";
clock.style.marginLeft = "210px";	
clock.style.marginTop = "30px";	


var timer = document.querySelector('.timer');
timer.appendChild(clock, timer.firstChild);
	
var pause = document.createElement('div');
pause.classList.add('pause');
pause.style.height ="80px";
pause.style.width = "200px";
pause.style.borderRadius ="20px";
pause.style.border = "9px solid black";
pause.style.marginLeft = "210px";	
pause.style.marginTop = "30px";	
pause.style.float= "left";
pause.style.fontSize = "54px";
pause.style.fontWeight = "bold";
pause.style.textAlign = "center";
pause.style.backgroundColor = "#32CD32";	
	

			
timer.appendChild(pause, clock.nextSibling);
console.log (elementNewA);	
elementNewA = document.createElement('a');
elementNewA.classList.add('af');
elementNewA.style.height = "28px";
elementNewA.style.color = "black";
elementNewA.style.textDecoration = "none";
elementNewA.href = "#";
elementNewA.style.display = "block";	
elementNewA.innerHTML = 'Start';
console.log (elementNewA);	
	
var pause2 = document.querySelector('.pause');
	
pause.appendChild(elementNewA);
	
	
	
var clear = pause.cloneNode(true);	
clear.classList.add('clear');
clear.style.marginLeft = "180px";
clear.style.backgroundColor = "#B22222";	

timer.appendChild(clear, pause.nextSibling);

var elementNewA2 = elementNewA.cloneNode(true);
elementNewA2.innerHTML =  'Clear';	
elementNewA2.classList.add('af2');
	
var clear2 = document.querySelector('.clear');
clear.removeChild(elementNewA);
	clear.appendChild(elementNewA2);

	

}

first.addEventListener('click', handler);












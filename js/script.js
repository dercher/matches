// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
setMatrix(4, 5);  

//=============== FUNCTIONS ============
function setMatrix(num1, num2) {
  var wrapper = document.createElement('div');
  var text = ''
  wrapper.classList.add('wrapper');  
  for (var i = 0; i < num1; i++) {
  	for (var y = 0; y < num2; y++) {
  	  text += '<div class="squere"><div class="top"></div><div class="right" onmousedown="drag(this)"></div><div class="bottom"></div><div class="left"></div><div class="diagonal-left"></div><div class="diagonal-right"></div></div>';
  	}
  	text += '<br>';
  }
  wrapper.innerHTML = text;
  document.getElementsByTagName('body')[0].appendChild(wrapper);
}
//----------------------------
function drag(el) {
	var rect = el.getBoundingClientRect();
  console.log(rect.top, rect.left);
	el.style.top = '50px';
	el.style.left ='50px';
  rect = el.getBoundingClientRect();
	console.log(rect.top, rect.left);
}
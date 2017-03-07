// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
setMatrix(5, 5);

//=============== FUNCTIONS ============
function setMatrix(num1, num2) {
  var wrapper = document.createElement('div');
  var text = ''
  wrapper.classList.add('wrapper');
  for (var i = 0; i < num1; i++) {
  	for (var i = 0; i < num2; i++) {
  	  text += '<div class="squere"></div>';
  	}
  }

}
// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
setMatrix(4, 5);   
createMatches(10);
//=============== FUNCTIONS ============
function setMatrix(num1, num2) {
  var wrapper = document.createElement('div');
  var text = ''
  wrapper.classList.add('wrapper');  
  for (var i = 0; i < num1; i++) {
  	for (var y = 0; y < num2; y++) {
  	  text += '<div class="squere"><div class="top"></div><div class="right"></div><div class="bottom"></div><div class="left"></div><div class="diagonal-left"></div><div class="diagonal-right"></div></div>';
  	}
  	text += '<br>';
  }
  wrapper.innerHTML = text;
  document.getElementsByTagName('body')[0].appendChild(wrapper);
}
//------------------------------------------
function createMatches(num) {
  var box = document.createElement('div');
  box.classList.add('box');
  var text = '', top = 0;
  for (var i = 0; i < num; i++) {
    text += '<div class="stock" onmousedown="moveMatch(event, this)" style="top: ' +(top+=20)+ 'px" ondblclick="rotateMatch(this)"></div>'
  }
  box.innerHTML = text;
  document.getElementsByTagName('body')[0].appendChild(box);
}
//-------------------- MOUSEMOVE ---------
 function moveMatch(event, elem) {
    if (event.which == 1) {
      addEventListener('mousemove', moved );
      event.preventDefault(); // Предотвращает выделение
    }

   function moved (event) {
      if (!buttonPressed(event)) {  //-- удаляем событие чтоб можно было цеплять следующий элемент
        removeEventListener('mousemove', moved);
      } else {
       elem.style.left = event.pageX - 50 + 'px';
       elem.style.top = event.pageY - 42 + 'px';
      }
   }
 }
//--------
  function buttonPressed(event) {
    if (event.buttons == null)
      return event.which != 0;
    else
      return event.buttons != 0;
  }
 //------------------------
 function rotateMatch(el) {
  el.style.transition = 'all 1s ease';
  var rotate = getRotate(el) + 90;

  // el.style.transform = 'rotate(135deg)';
  console.log(rotate);
  // rotate += 135;
  console.log(rotate);
  setTimeout(function() {
   el.style.transform = 'rotate('+rotate+'deg)';
  }, 100)
  
  setTimeout(function() {
    el.style.transition = 'all 0s ease';
  }, 1000)

 }
 //=============================
 function getRotate(el) {
    var style = el.getAttribute('style');
    if ( style.indexOf('rotate(') != -1 ) {
      var num = style.indexOf('rotate(') + 7;
      return Number(style.substr(num, 3));;
    } else {
      el.style.transform = 'rotate(90deg)';
      return 45;
    }

 }
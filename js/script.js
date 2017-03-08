// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
var positions = [], all = 0;
setMatrix(4, 5);   
// createMatches(40); 
// setMatchPlaces(4, 5); 
//=============== FUNCTIONS ============
function setMatrix(num1, num2) {
  var wrapper = document.createElement('div');
  var html = '';
  wrapper.classList.add('wrapper'); 
  document.getElementsByTagName('body')[0].appendChild(wrapper); 
  for (var i = 0; i < num1; i++) {
  	for (var y = 0; y < num2; y++) {
  	  html += '<div class="squere"><div class="d top"></div><div class="d right"></div><div class="d diagonal-left"></div><div class="d diagonal-right"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div></div>';
  	}
  	html += '<br>';
  }
  wrapper.innerHTML = html;
  // all = num1 * num2 * 4;
  placeMatches(wrapper);

}
//--------------------------------------
function placeMatches(el) {
  var width = getElemWidth( document.querySelectorAll('.squere')[0] );
  var rect = el.getBoundingClientRect();
  var dist = rect.left, top = 0;
  var matches = document.querySelectorAll('.match');
  console.log('matches.length', matches.length)
  for (var i = 0, count = 1; i < matches.length; i++, count++) {
    matches[i].style.left = -dist + 'px';
    matches[i].style.top = top + 'px';
    top += 10; 
    if ( count % 4 == 0 ) dist += width;
    if ( count % 20 == 0 ) {
      dist = rect.left;
      top = 65;
    }
  }
}
//-----------------------------------
 function getElemWidth(el) {
  var width = getComputedStyle(el);
  width = width.width;
  return Number(width.substr(0, width.length - 2));
 }
//------------------------------------------
// function createMatches(num) {
//   var box = document.createElement('div');
//   box.classList.add('box');
//   var text = '', top = 0;
//   for (var i = 0; i < num; i++) {
//     text += '<div class="match" onmousedown="moveMatch(event, this)" style="top: ' +(top+=12)+ 'px" ondblclick="rotateMatch(this)"></div>'
//   }
//   box.innerHTML = text;
//   document.getElementsByTagName('body')[0].appendChild(box);
//   moveMatches();
// }
//------------------------------------
function moveMatches(arr) {
  var matches = document.querySelectorAll('.match');
  var count = 0;
  var start = setInterval(function() {
  var top = document.querySelectorAll('.top')[0];
     
      if(++count >= matches.length) clearInterval(start);
   }, 200) 
  
  
  setTimeout(function() {
   for (var i = 0; i < matches.length; i++) {
    matches[i].style.transition = 'all 0s ease';
    }
   }, 1000)
}
//-------------------- MOUSEMOVE ---------
function replaceMatches( matches, count, top, left, rotate ) {



}

 function moveMatch(event, elem) {
  var rect = elem.parentNode.getBoundingClientRect();
  var distBack = rect.left;
  console.log('rect.left', rect.left)
    if (event.which == 1) {
      addEventListener('mousemove', moved );
      event.preventDefault(); 
    }

   function moved (event) {
      if (!buttonPressed(event)) {  
        removeEventListener('mousemove', moved);
      } else {
       elem.style.transition = 'all 0s ease';
       elem.style.left = event.pageX - 50 - distBack + 'px';
       elem.style.top = event.pageY - 22 + 'px';
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
  var rotate = getRotate(el) + 45;
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
      return 90;
    }
 }
 //----------------------------
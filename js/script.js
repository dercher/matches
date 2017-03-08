// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();
var positions = [['0px', '0px', '0px']], all = 0;
setMatrix(4, 5);   
//=============== FUNCTIONS ============
function setMatrix(num1, num2) {
  var wrapper = document.createElement('div');
  var html = '';
  wrapper.classList.add('wrapper'); 
  document.getElementsByTagName('body')[0].appendChild(wrapper); 
  for (var i = 0; i < num1; i++) {
  	for (var y = 0; y < num2; y++) {
  	  html += '<div class="squere"><div class="d top"></div><div class="d right" style="transform: rotate(270deg)"></div><div class="d diagonal-left" style="transform: rotate(135deg)"></div><div class="d diagonal-right" style="transform: rotate(227deg)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div><div class="match" onmousedown="moveMatch(event, this)" ondblclick="rotateMatch(this)"></div></div>';
  	}
  	html += '<br>';
  }
  wrapper.innerHTML = html;
  all = num1 * num2 * 4;
  placeMatches(wrapper);
}
//--------------------------------------
function placeMatches(el) {
  var width = getElemStyle( document.querySelectorAll('.squere')[0], 'width' );
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
  moveMatches();
}
//-----------------------------------
 function getElemStyle(el, property) {
  var style = getComputedStyle(el);
  if (property == 'width') {
    style = style.width;
    return Number(style.substr(0, style.length - 2));
  }
  if (property == 'topLeft') return [style.top, style.left, getRotate(el)];
  if (property == 'diagonal') return [style.top, style.left, getRotate(el)];
 }
//------------------------------------
displayNumbers()
function displayNumbers(argument) {
var els = document.querySelectorAll('.d');
  for (var i = 0; i < els.length; i++) {
    // els[i].style.height = '50px';
    els[i].innerHTML = i;
  }
}
//-------------------------------------
var alls = [];
var every = [21, 24, 25, 28, 29, 44, 45, 48, 49, 52, 53, 56, 57, 68, 72, 76];
buildPic(all);
function buildPic(all) {
  for (var i = 0; i < all; i++) {
    if ( i == every[0] ) { 
      alls[i] = every[0];
      every.shift();
    } else {
       alls[i] = 0;
    }
  }
  return alls;
}
//--------------------------------
function moveMatches() {
  var matches = document.querySelectorAll('.match');
  var count = 0, fore = 0;
  positions.push( getElemStyle( document.querySelectorAll('.right')[0], 'topLeft') );
  positions.push( getElemStyle( document.querySelectorAll('.diagonal-right')[0], 'diagonal') );
  positions.push( getElemStyle( document.querySelectorAll('.diagonal-left')[0], 'diagonal') );
  console.log('positions', positions);
  var start = setInterval(function() {
    if ( count == alls[count] ) {
      matches[count].style.transition = 'all 1s ease';
      matches[count].style.top = positions[fore][0];
      matches[count].style.left = positions[fore][1];
      matches[count].style.transform = 'rotate(' +positions[fore][2]+ 'deg)';
    }
    
    fore++;
    if (fore >= 4) { fore = 0; }
    if(++count >= matches.length) clearInterval(start);
   }, 25)  
  
  setTimeout(function() {
   for (var i = 0; i < matches.length; i++) {
    matches[i].style.transition = 'all 0s ease';
    }
   }, 1000)
}
//-------------------- MOUSEMOVE ---------
 function moveMatch(event, elem) {
  var rect = elem.parentNode.getBoundingClientRect();
  var distBack = rect.left;
  var distTop = rect.top;
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
       elem.style.top = event.pageY - distTop + 'px';
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
 function rotateMatch(el) {   // ------  rotating match by double click
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
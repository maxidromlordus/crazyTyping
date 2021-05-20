(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var typewrapper = document.getElementById("typewrapper");
console.log(typewrapper);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

document.addEventListener("keypress", function (e) {
  var red = getRandomInt(0, 255);
  var green = getRandomInt(0, 255);
  var blue = getRandomInt(0, 255);
  var pressedButton = e.key;
  var size = getRandomInt(20, 100);
  var letter = document.createElement("p"); //

  var top = getRandomInt(0, 700);
  var left = getRandomInt(0, 700);
  letter.style.position = "absolute";
  letter.style.top = top + "px";
  letter.style.left = left + "px";
  letter.style.fontSize = size + "px";
  letter.style.color = "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
  letter.innerText = pressedButton;
  typewrapper.appendChild(letter);
  setTimeout(function () {
    typewrapper.removeChild(letter);
  }, 1000); //
});
},{}]},{},[1]);

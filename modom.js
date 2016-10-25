// // Your DOM library code goes here inside of an IIFE and must set a global variables called md.


(function() {
  'use strict'
  var one = function(selector){
    return document.querySelector(selector)
  }

    var all = function(selector){
      return document.querySelectorAll(selector)
    }

    var remove = function(selector) {
      one(selector).remove()
    }

    var addClass = function(selector, className){
      one(selector).classList.add(className)
    }

    var removeClass = function(selector, className){
      return one(selector).classList.remove(className)
    }

    var hasClass = function(selector, className){
      return one(selector).classList.contains(className)
    }

    var getAttr = function(selector, attributeName){
      return one(selector).getAttribute(attributeName)
    }

    var setAttr = function(selector, attributeName, attributeValue){
      return one(selector).setAttribute(attributeName, attributeValue)
    }
    var setHTML = function(selector, innerHTMLValue){
      return one(selector).innerHTML = innerHTMLValue
    }

    var getHTML = function(selector){
      return one(selector).innerHTML
    }

    var ajax = function(url1, successCallback){
      fetch(url1)
      .then(res => res.json())
      .then(successCallback)
    }

    var getProp = function(selector, property){
      return one(selector)[property]//must use this instead of .property in this case
    }

    var setProp = function(selector, property, propertyValue){
      return one(selector)[property] = propertyValue
    }

    var getValue = function(selector){
      return one(selector).value
    }
    var setValue = function(selector, inputValue){
      one(selector).value = inputValue
    }
    var add = function(){
      var numbers = Array.from(arguments)

      var total = numbers.reduce(function(previousNumber, currentNumber) {
        return previousNumber + currentNumber
      }, 0)

      return total
    }
    var flipPage = function(){
      document.body.style.transform = 'rotate(180deg)'
    }



  window.md = {//declaring our library name and making it an object.
    one: one,
    all: all,
    remove: remove,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    getAttr: getAttr,
    setAttr: setAttr,
    setHTML: setHTML,
    getHTML: getHTML,
    ajax: ajax,
    getProp: getProp,
    setProp: setProp,
    getValue: getValue,
    setValue: setValue,
    add: add,
    flipPage: flipPage,
  }
}())

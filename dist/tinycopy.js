(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TinyCopy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  tinycopy - A small library for clipboard copy
 */

var TinyCopy = function () {
  function TinyCopy(trigger, target) {
    var _this = this;

    _classCallCheck(this, TinyCopy);

    this.listeners = {};

    if (!TinyCopy.isElement(trigger)) {
      throw new Error('Illegal arguments error: trigger');
    }

    var value = function (target) {
      if (TinyCopy.isElement(target)) {
        return target.value;
      } else if (TinyCopy.isText(target)) {
        return target;
      } else {
        throw new Error('Illegal arguments error: target');
      }
    }(target);

    trigger.addEventListener('click', function () {
      TinyCopy.exec(value, function (err, data) {
        if (!err) {
          _this.emit('success', data);
        } else {
          _this.emit('error', err);
        }
      });
    });
  }

  _createClass(TinyCopy, [{
    key: 'on',
    value: function on(event, action) {
      this.listeners[event] = action;
      return this;
    }
  }, {
    key: 'emit',
    value: function emit(event) {
      this.listeners[event] && this.listeners[event].apply(null, [].slice.call(arguments, 1));
    }
  }], [{
    key: 'createTempElement',
    value: function createTempElement(value) {
      var element = document.createElement('input');
      element.style.opacity = '0';
      element.setAttribute('readonly', '');
      element.value = value;
      return element;
    }
  }, {
    key: 'exec',
    value: function exec(value, callback) {
      var temp = TinyCopy.createTempElement(value);
      document.body.appendChild(temp);
      temp.select();
      try {
        if (document.execCommand('copy')) {
          callback(null, value);
        } else {
          callback(new Error('Not supported the execCommand.'), null);
        }
      } catch (e) {
        callback(new Error('Not supported the execCommand.'), null);
      } finally {
        document.body.removeChild(temp);
      }
    }
  }, {
    key: 'isElement',
    value: function isElement(node) {
      return !!(node && (node.nodeName || node.prop && node.attr && node.find));
    }
  }, {
    key: 'isText',
    value: function isText(obj) {
      return TinyCopy.is('String', obj) || TinyCopy.is('Number', obj);
    }
  }, {
    key: 'is',
    value: function is(type, obj) {
      var clazz = Object.prototype.toString.call(obj).slice(8, -1);
      return obj !== undefined && obj !== null && clazz === type;
    }
  }]);

  return TinyCopy;
}();

exports.default = TinyCopy;
module.exports = exports['default'];
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG4gIHRpbnljb3B5IC0gQSBzbWFsbCBsaWJyYXJ5IGZvciBjbGlwYm9hcmQgY29weVxuICovXG5cbnZhciBUaW55Q29weSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGlueUNvcHkodHJpZ2dlciwgdGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW55Q29weSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgaWYgKCFUaW55Q29weS5pc0VsZW1lbnQodHJpZ2dlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudHMgZXJyb3I6IHRyaWdnZXInKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBpZiAoVGlueUNvcHkuaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoVGlueUNvcHkuaXNUZXh0KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudHMgZXJyb3I6IHRhcmdldCcpO1xuICAgICAgfVxuICAgIH0odGFyZ2V0KTtcblxuICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBUaW55Q29weS5leGVjKHZhbHVlLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgX3RoaXMuZW1pdCgnc3VjY2VzcycsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGlueUNvcHksIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgYWN0aW9uKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBhY3Rpb247XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbWl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5hcHBseShudWxsLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnY3JlYXRlVGVtcEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUZW1wRWxlbWVudCh2YWx1ZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZXhlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4ZWModmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdGVtcCA9IFRpbnlDb3B5LmNyZWF0ZVRlbXBFbGVtZW50KHZhbHVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgICB0ZW1wLnNlbGVjdCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykpIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdOb3Qgc3VwcG9ydGVkIHRoZSBleGVjQ29tbWFuZC4nKSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdOb3Qgc3VwcG9ydGVkIHRoZSBleGVjQ29tbWFuZC4nKSwgbnVsbCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gICAgICByZXR1cm4gISEobm9kZSAmJiAobm9kZS5ub2RlTmFtZSB8fCBub2RlLnByb3AgJiYgbm9kZS5hdHRyICYmIG5vZGUuZmluZCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVGV4dChvYmopIHtcbiAgICAgIHJldHVybiBUaW55Q29weS5pcygnU3RyaW5nJywgb2JqKSB8fCBUaW55Q29weS5pcygnTnVtYmVyJywgb2JqKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzKHR5cGUsIG9iaikge1xuICAgICAgdmFyIGNsYXp6ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpO1xuICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBjbGF6eiA9PT0gdHlwZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGlueUNvcHk7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpbnlDb3B5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107Il19

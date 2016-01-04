assert = require 'power-assert'
TinyCopy = require '../src/main'

$ = (selector) ->
  window.document.querySelector selector

trigger = (el, ev) ->
  e = window.document.createEvent 'UIEvents'
  e.initEvent ev, true, true
  el.dispatchEvent e

describe "main", ->

  if global.mocha
    global.mocha.globals ['*']

  before ->
    global.button = document.createElement 'button'
    global.button.setAttribute 'id', 'button'
    global.button.textContent = 'copy'
    document.body.appendChild button

    global.input = document.createElement 'input'
    global.input.setAttribute 'id', 'input'
    global.input.setAttribute 'value', 'abcdefg'
    global.input.setAttribute 'disabled', 'disabled'
    document.body.appendChild input

  after ->
    document.body.removeChild global.button
    document.body.removeChild global.input

  beforeEach (done) ->
    global.copy = new TinyCopy $("#button"), $("#input")
    global.copy.on 'success', ->
    global.copy.on 'error', ->
    done()

  afterEach (done) ->
    global.copy = null
    done()

  it "can be initialized.", (done) ->
    assert $("#button") == copy.trigger
    assert $("#input") == copy.target
    assert copy.listeners['success']
    assert copy.listeners['error']
    done()

  it "can be add temporary element.", (done) ->
    copy.addTemporary()
    assert copy.temporary.value == 'abcdefg'
    done()

  it "can be remove temporary element.", (done) ->
    copy.addTemporary()
    copy.removeTemporary()
    assert copy.temporary == null
    done()

  it "can be click event.", (done) ->
    copy.on 'success', ->
      done()
    copy.on 'error', ->
      done()
    copy.addTemporary()
    copy.execCopy()

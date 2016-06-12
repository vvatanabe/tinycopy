'use strict';

const assert = require('power-assert');
import TinyCopy from '../src/main';

const $ = selector => window.document.querySelector(selector);

describe("main", () => {

  if (global.mocha) {
    global.mocha.globals(['*']);
  }

  it("it is element.", done => {
    const element = document.createElement('input');
    assert(TinyCopy.isElement(element));
    done();
  });

  it("it is not element.", done => {
    const element = {};
    assert(!TinyCopy.isElement(element));
    done();
  });

  it("it is text.", done => {
    assert(TinyCopy.isText('hello tiny copy.'));
    assert(TinyCopy.isText(12345678));
    done();
  });

  it("it is not text.", done => {
    assert(!TinyCopy.isText({}));
    done();
  });

  describe("copy from text", () => {

    before(() => {
      global.button = document.createElement('button');
      global.button.setAttribute('id', 'button');
      global.button.setAttribute('data-text', 'hello');
      global.button.textContent = 'copy';
      document.body.appendChild(button);
    });

    after(() => document.body.removeChild(global.button));

  });

  describe("copy from element", () => {

    before(() => {
      global.button = document.createElement('button');
      global.button.setAttribute('id', 'button');
      global.button.textContent = 'copy';
      document.body.appendChild(button);
      global.input = document.createElement('input');
      global.input.setAttribute('id', 'input');
      global.input.setAttribute('value', 'abcdefg');
      global.input.setAttribute('disabled', 'disabled');
      document.body.appendChild(input);
    });

    after(() => {
      document.body.removeChild(global.button);
      document.body.removeChild(global.input);
    });

    beforeEach(done => {
      global.copy = new TinyCopy($("#button"), $("#input"));
      global.copy.on('success', () => {});
      global.copy.on('error', () => {});
      done();
    });

    afterEach(done => {
      global.copy = null;
      done();
    });

    it("can be initialized.", done => {
      assert(copy.listeners['success']);
      assert(copy.listeners['error']);
      done();
    });

    it("can be click event.", done => {
      copy.on('success', () => done());
      copy.on('error', () => done());
      $("#button").click();
    });

  });

});

# tinycopy [![Build Status](https://travis-ci.org/vvatanabe/tinycopy.svg)](https://travis-ci.org/vvatanabe/tinycopy)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/vvatanabe.svg)](https://saucelabs.com/u/vvatanabe)

Tiny library for clipboard copy.

## Install

tinycopy detects and supports CommonJS (node, browserify) and AMD (RequireJS). In the absence of those, it adds a object `TinyCopy` to the global namespace.

### Bower

Install [`node`](https://nodejs.org/download/) and [`bower`](http://bower.io/) if you haven't already.

Get `tinycopy`:

```
$ cd /project
$ bower install tinycopy
```

Add this script to your `index.html`:

```
<script type="text/javascript" src="bower_components/tinycopy/dist/tinycopy.js">
</script>
```

To pull in updates and bug fixes:

```
$ bower update tinycopy
```

### Node / npm

```
$ npm install tinycopy
```

## Usage

``` javascript
// copy from input element
var tinycopy = new TinyCopy(element, input);
tinycopy.on('success', function(data) {
  // onCopyCompleted
});
tinycopy.on('error', function(err) {
  // onCopyFailed
});

// copy from text1
var tinycopy = new TinyCopy(element, 'hello');
tinycopy.on('success', function(data) {
  // onCopyCompleted
});
tinycopy.on('error', function(err) {
  // onCopyFailed
});

// copy from text2
element.addEventListener('click', function () {
  TinyCopy.exec('hello').then(function (data) {
    // onCopyCompleted
  }).catch(function (err) {
    // onCopyFailed
  });
});
```

## License

MIT License

* http://www.opensource.org/licenses/mit-license.php

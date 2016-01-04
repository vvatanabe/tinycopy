# tinycopy [![Build Status](https://travis-ci.org/vvatanabe/tinycopy.svg)](https://travis-ci.org/vvatanabe/tinycopy)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/vvatanabe.svg)](https://saucelabs.com/u/vvatanabe)

Tiny library for clipboard copy.

## Usage

```

var tinycopy = new TinyCopy(element, input);
tinycopy.on('success', function() {
  // onCopyCompleted
});
tinycopy.on('error', function() {
  // onCopyFailed
});

```
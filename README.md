# tinycopy

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
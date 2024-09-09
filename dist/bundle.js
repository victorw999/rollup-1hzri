(function () {
  'use strict';

  // src/foo.js
  var foo = 'hello world!';

  console.log('inside foo.js');

  var version = "1.0.0";

  // src/main.js

  function main () {
    console.log('inside main.js !');
    console.log(foo);
    console.log('version ' + version);
    console.log(`terser() minifies the bundle`);
  }

  return main;

})();

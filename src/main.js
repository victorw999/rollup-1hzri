// src/main.js
import foo from './foo.js';
import { version } from '../package.json';

export default function () {
  console.log('inside main.js !')
  console.log(foo);
  console.log('version ' + version);
  console.log(`terser() minifies the bundle`)
}



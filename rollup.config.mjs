import { defineConfig } from 'rollup';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: 'src/main.js', // Replace with your entry point file
  output: [
    {
      file: 'dist/bundle.js',
      format: 'iife' // Choose the desired output format (e.g., 'iife', 'cjs', 'esm')
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
});
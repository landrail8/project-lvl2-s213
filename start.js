#!/usr/bin/env node

import f from './src/compare';

const file1 = '/home/alex/before.json';
const file2 = '/home/alex/after.json';

// const text1 = fs.readFileSync(file1, 'utf8');
// const text2 = fs.readFileSync(file2, 'utf8');

const objCompare = f(file1, file2);
console.log(objCompare);
